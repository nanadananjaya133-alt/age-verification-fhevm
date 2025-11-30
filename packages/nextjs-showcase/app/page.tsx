import Link from 'next/link';

export default function HomePage() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Main Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                🔐 Powered by FHEVM - Fully Homomorphic Encryption
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Private Age
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Verification
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Verify age compliance <strong>without revealing personal data</strong>
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Revolutionary blockchain-based identity verification for gaming, DeFi, social platforms, and regulated industries. 
              Your age stays encrypted forever, yet verification is instant and trustworthy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/verify"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Start Verification
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <a
                href="#how-it-works"
                className="px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">100% Private</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your age is encrypted on your device. No server, no third party, not even the blockchain can see your actual age.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Instant Proof</h3>
              <p className="text-gray-600 dark:text-gray-400">
                On-chain verification in seconds. No KYC, no documents, no waiting. Just connect your wallet and verify.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Universal Standard</h3>
              <p className="text-gray-600 dark:text-gray-400">
                One verification works everywhere. Reusable across all Web3 platforms supporting FHEVM technology.
              </p>
            </div>
          </div>

          {/* Use Cases Section */}
          <div id="use-cases" className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Real-World Applications
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Age verification is required in trillion-dollar industries. Now it's possible without compromising privacy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
                <div className="text-3xl mb-3">🎮</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Gaming & NFTs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comply with age ratings (ESRB, PEGI) for blockchain games and NFT marketplaces without collecting user data.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">DeFi & Finance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Meet regulatory requirements for lending, trading, and financial services in a privacy-first way.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
                <div className="text-3xl mb-3">🎭</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Social & Dating</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Protect minors on social platforms and dating apps with cryptographic proof instead of trust.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-800">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">E-Commerce</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Age-gate for alcohol, tobacco, adult content, and restricted products with zero data liability.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div id="how-it-works" className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Four simple steps. Military-grade encryption. Complete privacy.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-6 items-start bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Enter Your Age</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Input your age in the secure web form. No registration, no email, no identity documents required.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Encrypt on Your Device</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      FHEVM technology encrypts your age locally in your browser using fully homomorphic encryption. Your plaintext age never leaves your device.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">On-Chain Verification</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Smart contract verifies age ≥ 18 while data stays encrypted. The blockchain never sees your real age, only the encrypted version.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Decrypt Your Result</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sign with your wallet to decrypt the result (Pass ✅ or Fail ❌). Only you can decrypt. Not the platform, not the blockchain, not anyone else.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
            <h2 className="text-3xl font-bold mb-4">Built on Cutting-Edge Cryptography</h2>
            <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
              Powered by <strong>Zama FHEVM</strong> - the world's first blockchain with native fully homomorphic encryption support
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🔐 FHE (Fully Homomorphic Encryption)</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">⛓️ Ethereum Sepolia Testnet</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🛡️ Zero-Knowledge Proofs</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🌐 Decentralized KMS</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Experience Privacy-First Verification?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              No registration. No personal data. No waiting. Just connect your wallet and verify in under 60 seconds.
            </p>
            <Link
              href="/verify"
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Verification Now →
            </Link>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>🔒 Privacy Guarantee:</strong> Your actual age never leaves your device in plaintext. 
                All computation happens on encrypted data using fully homomorphic encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

