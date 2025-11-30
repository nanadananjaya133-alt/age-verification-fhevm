// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32, ebool} from "@fhevm/solidity/lib/FHE.sol";
import {ZamaEthereumConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/**
 * @title AgeVerification
 * @notice Privacy-preserving age verification using FHEVM
 * @dev Users submit encrypted age, contract checks if >= 18, user can decrypt result
 */
contract AgeVerification is ZamaEthereumConfig {
    // Encrypted minimum age (18)
    euint32 private minimumAge;
    
    // Storage
    mapping(address => euint32) public userResults;
    mapping(address => bool) public hasSubmitted;
    mapping(address => uint256) public submissionTimestamp;
    
    // Events
    event AgeSubmitted(address indexed user, uint256 timestamp);
    
    constructor() {
        // Initialize encrypted minimum age
        minimumAge = FHE.asEuint32(uint32(18));
        FHE.allowThis(minimumAge);
    }
    
    /**
     * @notice Submit encrypted age for verification
     * @param encryptedAge Encrypted age value from frontend
     * @param proof Zero-knowledge proof for the encrypted input
     */
    function submitAge(
        externalEuint32 encryptedAge,
        bytes calldata proof
    ) external {
        // 1. Convert external encrypted input to internal encrypted value
        euint32 age = FHE.fromExternal(encryptedAge, proof);
        
        // 2. Compare: age >= 18
        ebool isAdult = FHE.ge(age, minimumAge);
        
        // 3. Convert boolean result to euint32: 1 (pass) or 0 (fail)
        euint32 one = FHE.asEuint32(uint32(1));
        euint32 zero = FHE.asEuint32(uint32(0));
        euint32 result = FHE.select(isAdult, one, zero);
        
        // 4. Store result
        userResults[msg.sender] = result;
        hasSubmitted[msg.sender] = true;
        submissionTimestamp[msg.sender] = block.timestamp;
        
        // 5. Grant permissions (CRITICAL!)
        FHE.allowThis(result);         // Contract can access/return handle
        FHE.allow(result, msg.sender); // User can decrypt
        
        emit AgeSubmitted(msg.sender, block.timestamp);
    }
    
    /**
     * @notice Get encrypted verification result
     * @return Encrypted result handle (bytes32)
     */
    function getMyResult() external view returns (bytes32) {
        require(hasSubmitted[msg.sender], "No submission found");
        return FHE.toBytes32(userResults[msg.sender]);
    }
    
    /**
     * @notice Check if user has submitted
     * @param user User address
     * @return True if user has submitted
     */
    function hasUserSubmitted(address user) external view returns (bool) {
        return hasSubmitted[user];
    }
    
    /**
     * @notice Get user submission timestamp
     * @return Timestamp of submission
     */
    function getMySubmissionTimestamp() external view returns (uint256) {
        require(hasSubmitted[msg.sender], "No submission found");
        return submissionTimestamp[msg.sender];
    }
}

