'use client';

import { useState, useEffect, useRef } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers, BrowserProvider } from 'ethers';
import { getWalletProvider } from '@/utils/wallet';
import Link from 'next/link';

// Contract Configuration
const CONTRACT_ADDRESS = '0x798C8Fcf112d37F98a64ffe1a8520C5230478838';
const CONTRACT_ABI = [
  'function submitAge(bytes32 encryptedAge, bytes calldata proof) external',
  'function getMyResult() external view returns (bytes32)',
  'function hasUserSubmitted(address user) external view returns (bool)',
  'event AgeSubmitted(address indexed user, uint256 timestamp)',
];

// FHEVM v0.9 Configuration (7 required parameters)
const FHEVM_CONFIG = {
  chainId: 11155111, // Sepolia
  aclContractAddress: '0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D',
  kmsContractAddress: '0xbE0E383937d564D7FF0BC3b46c51f0bF8d5C311A',
  inputVerifierContractAddress: '0xBBC1fFCdc7C316aAAd72E807D9b0272BE8F84DA0',
  verifyingContractAddressDecryption: '0x5D8BD78e2ea6bbE41f26dFe9fdaEAa349e077478',
  verifyingContractAddressInputVerification: '0x483b9dE06E4E4C7D35CCf5837A1668487406D955',
  gatewayChainId: 10901,
  relayerUrl: 'https://relayer.testnet.zama.org',
};

export default function VerifyPage() {
  const { isConnected, address } = useAccount();
  const { data: walletClient } = useWalletClient();
  
  const [fhevmInstance, setFhevmInstance] = useState<any>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  
  const [age, setAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [canDecrypt, setCanDecrypt] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const isInitializingRef = useRef(false);

  // Initialize FHEVM Instance
  useEffect(() => {
    if (!isConnected || !address || !walletClient || fhevmInstance || isInitializingRef.current) {
      return;
    }

    const initFhevm = async () => {
      isInitializingRef.current = true;
      setIsInitializing(true);
      setInitError(null);

      try {
        const relayerSDK = (window as any).relayerSDK;
        if (!relayerSDK) {
          throw new Error('Relayer SDK not loaded');
        }

        // Initialize SDK (CRITICAL!)
        await relayerSDK.initSDK();

        // Get provider
        let provider = getWalletProvider();
        if (!provider && walletClient) {
          provider = walletClient;
        }
        if (!provider) {
          throw new Error('No wallet provider found');
        }

        // Create FHEVM instance
        const instance = await relayerSDK.createInstance({
          ...FHEVM_CONFIG,
          network: provider,
        });

        setFhevmInstance(instance);
        console.log('✅ FHEVM initialized successfully');
      } catch (e: any) {
        setInitError(e.message);
        console.error('❌ FHEVM init failed:', e);
        isInitializingRef.current = false;
      } finally {
        setIsInitializing(false);
      }
    };

    initFhevm();
  }, [isConnected, address, walletClient, fhevmInstance]);

  // Submit encrypted age
  const handleSubmitAge = async () => {
    if (!fhevmInstance || !walletClient || !age) return;
    
    setIsSubmitting(true);
    setError(null);
    setResult(null);
    setCanDecrypt(false);
    
    try {
      const ageNumber = parseInt(age);
      if (isNaN(ageNumber) || ageNumber < 0 || ageNumber > 150) {
        throw new Error('Please enter a valid age (0-150)');
      }

      // 1. Encrypt age
      const input = fhevmInstance.createEncryptedInput(CONTRACT_ADDRESS, address);
      input.add32(ageNumber);
      const encryptedInput = await input.encrypt();
      
      const handle = encryptedInput.handles[0];
      const proof = encryptedInput.inputProof;

      // 2. Submit to contract
      const provider = new BrowserProvider(walletClient as any);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      
      // Set gas limit manually (FHEVM operations require high gas)
      const tx = await contract.submitAge(handle, proof, {
        gasLimit: 500000n  // 500k gas limit for FHEVM operations
      });
      console.log('📤 Transaction sent:', tx.hash);
      
      await tx.wait();
      console.log('✅ Transaction confirmed');
      
      // Allow decryption immediately
      setCanDecrypt(true);
      
    } catch (e: any) {
      console.error('❌ Submit error:', e);
      setError(e.message || 'Failed to submit age');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Decrypt result using userDecrypt with auto-retry
  const handleDecryptResult = async (retryCount = 0) => {
    if (!fhevmInstance || !walletClient || !address) return;
    
    setIsDecrypting(true);
    setError(null);
    
    try {
      // Get contract with signer
      const provider = new BrowserProvider(walletClient as any);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      
      // Get encrypted result handle
      const encryptedHandle = await contract.getMyResult();
      console.log('🔐 Encrypted handle:', encryptedHandle);
      
      // Generate keypair for decryption
      const keypair = fhevmInstance.generateKeypair();
      
      // Prepare decryption parameters
      const handleContractPairs = [
        { handle: encryptedHandle, contractAddress: CONTRACT_ADDRESS }
      ];
      const startTimeStamp = Math.floor(Date.now() / 1000).toString();
      const durationDays = "10";
      const contractAddresses = [CONTRACT_ADDRESS];
      
      // Create EIP-712 signature message
      const eip712 = fhevmInstance.createEIP712(
        keypair.publicKey,
        contractAddresses,
        startTimeStamp,
        durationDays
      );
      
      // Remove EIP712Domain for signing
      const typesWithoutDomain = { ...eip712.types };
      delete typesWithoutDomain.EIP712Domain;
      
      // Request user signature
      console.log('✍️ Requesting signature...');
      const signature = await signer.signTypedData(
        eip712.domain,
        typesWithoutDomain,
        eip712.message
      );
      console.log('✅ Signature received');
      
      // Call userDecrypt
      console.log('🔓 Decrypting...');
      const decryptedResults = await fhevmInstance.userDecrypt(
        handleContractPairs,
        keypair.privateKey,
        keypair.publicKey,
        signature.replace("0x", ""),
        contractAddresses,
        address,
        startTimeStamp,
        durationDays
      );
      
      const decryptedValue = decryptedResults[encryptedHandle];
      console.log('✅ Decrypted result (raw):', decryptedValue, typeof decryptedValue);
      
      // Convert bigint to number (userDecrypt returns 0n or 1n)
      const resultNumber = Number(decryptedValue);
      console.log('✅ Converted to number:', resultNumber);
      setResult(resultNumber);
      
    } catch (e: any) {
      console.error('❌ Decrypt error:', e);
      
      // Auto-retry on 500 error (permission sync issue)
      if (e.message?.includes('500') && retryCount < 3) {
        const waitTime = (retryCount + 1) * 10;
        console.log(`⚠️ Retry ${retryCount + 1}/3 after ${waitTime}s...`);
        setError(`Permission syncing... Retry ${retryCount + 1}/3 in ${waitTime}s`);
        
        await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
        return handleDecryptResult(retryCount + 1);
      }
      
      setError(e.message || 'Failed to decrypt result');
    } finally {
      setIsDecrypting(false);
    }
  };

  // UI States
  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Connect Your Wallet</h1>
          <ConnectButton />
        </div>
      </div>
    );
  }

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl">Initializing FHEVM...</p>
        </div>
      </div>
    );
  }

  if (initError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center text-red-500">
          <p className="font-bold text-xl mb-2">❌ Initialization Error</p>
          <p className="text-sm mb-4">{initError}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Home
          </Link>
          <ConnectButton />
        </div>
        
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Age Verification</h1>
          
          {/* Input Form */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Enter Your Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 25"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
              disabled={isSubmitting || canDecrypt}
            />
            <p className="text-xs text-gray-500 mt-1">
              Your age will be encrypted before submission
            </p>
          </div>
          
          {/* Submit Button */}
          <button
            onClick={handleSubmitAge}
            disabled={!age || isSubmitting || canDecrypt || result !== null}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? '⏳ Submitting...' : '🔒 Submit Encrypted Age'}
          </button>
          
          {/* Decrypt Button */}
          {canDecrypt && result === null && (
            <button
              onClick={() => handleDecryptResult()}
              disabled={isDecrypting}
              className="w-full mt-4 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50"
            >
              {isDecrypting ? '🔓 Decrypting...' : '🔓 Decrypt Result'}
            </button>
          )}
          
          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="text-sm text-red-800 dark:text-red-200">
                ❌ {error}
              </p>
            </div>
          )}
          
          {/* Result Display */}
          {result !== null && (
            <div className={`mt-6 p-6 rounded-xl border-2 ${
              result === 1
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                : 'bg-red-50 dark:bg-red-900/20 border-red-500'
            }`}>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {result === 1 ? '✅' : '❌'}
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {result === 1 ? 'Verification Passed!' : 'Verification Failed'}
                </h2>
                <p className={`text-lg ${
                  result === 1 ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                }`}>
                  {result === 1
                    ? 'Your age is 18 or older'
                    : 'Your age is below 18'}
                </p>
              </div>
            </div>
          )}
          
          {/* Reset Button */}
          {result !== null && (
            <button
              onClick={() => {
                setAge('');
                setResult(null);
                setCanDecrypt(false);
                setError(null);
              }}
              className="w-full mt-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              🔄 Verify Another Age
            </button>
          )}
        </div>
        
        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>🔐 Privacy Note:</strong> Your age is encrypted on your device and never exposed. 
            The smart contract performs verification on encrypted data using FHEVM.
          </p>
        </div>
      </div>
    </div>
  );
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
