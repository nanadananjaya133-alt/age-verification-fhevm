# Age Verification - FHEVM

> Privacy-preserving age verification using Fully Homomorphic Encryption (FHEVM v0.9)

A decentralized application that allows users to verify their age (≥18) without revealing their actual age to anyone. All computations happen on encrypted data using Zama's FHEVM technology.

---

## 🚀 商业愿景 & 市场机会

### 💡 核心价值主张

**问题**：全球范围内，年龄验证是一个价值 **数万亿美元** 的合规需求，但现有解决方案存在严重缺陷：
- **传统 KYC**：需要上传身份证、护照，用户隐私完全暴露，数据泄露风险极高
- **第三方服务**：依赖中心化机构，成本高（每次验证 $0.5-$2），响应慢，且存在单点故障
- **信任问题**：用户不信任平台会安全存储敏感数据，导致 60% 的用户流失

**我们的解决方案**：
- ✅ **零数据泄露**：用户年龄永远加密，平台无法看到真实数据
- ✅ **即时验证**：链上验证仅需 30 秒，无需等待第三方审核
- ✅ **低成本**：Gas 费仅 $0.01-0.05（Sepolia），比传统 KYC 便宜 50 倍
- ✅ **通用标准**：一次验证，全网通用，减少用户重复操作

---

### 🌍 目标市场与规模

#### 1. **游戏与 NFT 市场** 🎮
- **市场规模**：全球游戏市场 $180B+，区块链游戏 $10B+ 且快速增长
- **痛点**：ESRB、PEGI 年龄分级要求，但传统 KYC 导致用户流失严重
- **应用**：
  - 18+ 游戏年龄门槛（射击、赌博类游戏）
  - NFT 市场限制成人内容访问
  - GameFi 平台合规（防止未成年人赌博）
- **收入模式**：每次验证收费 $0.10，或按平台月订阅 $500-5000

#### 2. **DeFi 与金融服务** 💰
- **市场规模**：DeFi TVL $50B+，中心化交易所用户 5 亿+
- **痛点**：监管要求（MiCA、美国证券法），但用户拒绝提交身份证
- **应用**：
  - 去中心化交易所（DEX）准入验证
  - 借贷协议（Aave、Compound）合规
  - 保险平台年龄限制
  - 稳定币发行商（USDC、USDT）KYC 替代方案
- **收入模式**：平台集成费 $10,000-50,000/年 + 每次验证 $0.05

#### 3. **社交与约会平台** 🎭
- **市场规模**：在线约会市场 $10B+，Web3 社交快速崛起（Lens Protocol、Farcaster）
- **痛点**：保护未成年人，但传统方案成本高、用户反感
- **应用**：
  - 约会应用年龄验证（Tinder、Bumble）
  - Web3 社交平台成人内容过滤
  - 直播平台合规（Twitch、OnlyFans 替代品）
- **收入模式**：订阅制 SaaS $1,000-10,000/月

#### 4. **电商与内容平台** 🛒
- **市场规模**：电商 $5.7T+，成人内容、酒精、烟草等受限商品市场 $500B+
- **痛点**：法律要求年龄验证，但用户不愿提供身份证
- **应用**：
  - 酒精、烟草电商年龄门槛
  - 成人内容网站（OnlyFans、Patreon）
  - 药品、保健品在线销售
  - 视频平台（Netflix、YouTube）家长控制
- **收入模式**：API 调用按次计费 $0.05-0.20/次

---

### 💸 商业模式（多元化收入）

#### **1. B2B SaaS 订阅** 🏢
- **目标客户**：游戏公司、DeFi 协议、社交平台
- **定价**：
  - 初创版：$500/月（10,000 次验证/月）
  - 企业版：$5,000/月（100,000 次验证/月）
  - 定制版：按需定价
- **价值**：一站式合规解决方案，无需自建 KYC 团队

#### **2. API 调用按次计费** 📡
- **价格**：$0.05-0.20/次验证
- **目标**：大型平台（交易所、社交网络）
- **优势**：成本仅为传统 KYC 的 5-10%

#### **3. 白标解决方案** 🏷️
- **价格**：$50,000-200,000 一次性费用 + 年度维护费
- **目标**：大型企业需要私有化部署
- **交付**：源代码 + 技术支持 + 定制化开发

#### **4. NFT 徽章与链上凭证** 🎖️
- **功能**：验证通过后铸造 NFT 徽章（Soulbound Token）
- **应用**：其他平台可查询用户是否持有年龄验证 NFT
- **收入**：铸造费 $1-5/次，二次验证查询费 $0.01/次

#### **5. 数据洞察（匿名聚合）** 📊
- **产品**：提供行业年龄分布报告（如"区块链游戏用户平均年龄"）
- **隐私保证**：仅提供聚合统计，不泄露个人数据
- **收入**：报告订阅 $1,000-10,000/份

---

### 🎯 竞争优势

| 维度 | 传统 KYC | 竞品（如 Civic、Onfido） | **我们 (FHEVM)** |
|------|---------|------------------------|-----------------|
| **隐私保护** | ❌ 需上传身份证 | ⚠️ 第三方持有数据 | ✅ 数据永远加密 |
| **成本** | $1-2/次 | $0.5-1/次 | **$0.01-0.05/次** |
| **速度** | 数小时-数天 | 1-5 分钟 | **30-60 秒** |
| **可重用性** | ❌ 每个平台重新验证 | ⚠️ 部分支持 | ✅ 一次验证全网通用 |
| **监管友好** | ✅ | ✅ | ✅ |
| **去中心化** | ❌ | ❌ | ✅ |

---

### 📈 增长路线图

#### **Q1 2025：MVP 与种子客户** 🌱
- ✅ 完成 Sepolia 测试网部署
- ✅ 获得 3-5 个种子客户（小型 GameFi 项目）
- 目标：1,000 次验证/月

#### **Q2 2025：主网上线与规模化** 🚀
- [ ] 部署到以太坊主网 + L2（Arbitrum、Optimism）
- [ ] 集成 5-10 个中型平台（DEX、社交应用）
- [ ] 推出 API 与 SDK
- 目标：50,000 次验证/月，收入 $5,000/月

#### **Q3 2025：多链扩展** 🌐
- [ ] 支持 Polygon、BNB Chain、Avalanche
- [ ] 推出白标解决方案
- [ ] 签约 1-2 个大型客户（月活 100 万+）
- 目标：500,000 次验证/月，收入 $50,000/月

#### **Q4 2025：生态系统与标准化** 🏆
- [ ] 推出 NFT 徽章系统（跨平台认证）
- [ ] 与 Web3 身份协议集成（ENS、Lens、Worldcoin）
- [ ] 申请成为 W3C、EIP 标准一部分
- 目标：200 万次验证/月，收入 $200,000/月

---

### 🌟 长期愿景

1. **成为 Web3 身份基础设施**：如同 OAuth 之于 Web2，我们要成为 Web3 年龄验证的标准协议
2. **扩展到其他隐私验证**：信用评分、收入验证、教育背景（均保持数据加密）
3. **监管合作**：与政府、行业协会合作，推动隐私友好型法规
4. **全球化**：支持 GDPR（欧洲）、CCPA（加州）、COPPA（美国未成年保护法）等各地法规

**最终目标**：让隐私保护成为默认选项，而不是妥协。

---

## 🌟 技术特性

- **🔒 Complete Privacy**: Your age is encrypted on your device and never exposed in plain text
- **⛓️ On-Chain Verification**: Smart contract verifies age ≥ 18 on encrypted data
- **🔐 User-Controlled Decryption**: Only you can decrypt the verification result using your wallet signature
- **✨ Beautiful UI**: Modern, responsive interface with real-time feedback
- **🚀 Zero-Knowledge Proofs**: Cryptographic proofs ensure data integrity

## 🏗️ Architecture

### Smart Contract (FHEVM v0.9)
- **Contract**: `AgeVerification.sol`
- **Network**: Sepolia Testnet
- **Address**: `0x798C8Fcf112d37F98a64ffe1a8520C5230478838`
- **Operations**:
  - `submitAge()`: Accept encrypted age and verify if ≥ 18
  - `getMyResult()`: Return encrypted verification result
  - Uses `FHE.ge()` for encrypted comparison
  - Implements dual permission model (`FHE.allowThis()` + `FHE.allow()`)

### Frontend
- **Framework**: Next.js 15 + React 19
- **Styling**: Tailwind CSS
- **Wallet**: RainbowKit + Wagmi v2
- **FHEVM SDK**: Zama Relayer SDK 0.3.0-5 (CDN)
- **Blockchain**: Ethers.js v6

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm
- MetaMask or compatible Web3 wallet
- Sepolia testnet ETH ([Get from faucet](https://sepoliafaucet.com/))

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd age-verification-fhevm

# Install dependencies
pnpm install

# Copy environment file
cp packages/hardhat/.env.example packages/hardhat/.env
```

### Development

```bash
# Start the development server
pnpm dev

# Open http://localhost:3000
```

The frontend will be available at `http://localhost:3000`

### Contract Deployment (Optional)

The contract is already deployed to Sepolia. If you need to redeploy:

```bash
# Compile contracts
cd packages/hardhat
pnpm compile

# Deploy to Sepolia
pnpm exec hardhat deploy --network sepolia

# Update CONTRACT_ADDRESS in packages/nextjs-showcase/app/verify/page.tsx
```

## 📖 How It Works

### 1. User Flow

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│ Enter Age   │─────>│ Encrypt      │─────>│ Submit to   │
│ (plaintext) │      │ (FHEVM)      │      │ Contract    │
└─────────────┘      └──────────────┘      └─────────────┘
                                                    │
                                                    ▼
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│ See Result  │<─────│ Decrypt      │<─────│ Verify      │
│ (1 or 0)    │      │ (userDecrypt)│      │ age >= 18   │
└─────────────┘      └──────────────┘      └─────────────┘
```

### 2. Encryption Process

1. **Input**: User enters age (e.g., 25)
2. **Encrypt**: FHEVM SDK encrypts the value using `createEncryptedInput()`
3. **Proof**: Zero-knowledge proof is generated to verify encryption validity
4. **Submit**: Encrypted data (`handle`) + proof sent to smart contract

### 3. On-Chain Verification

```solidity
// Smart contract (simplified)
euint32 age = FHE.fromExternal(encryptedAge, proof);
ebool isAdult = FHE.ge(age, minimumAge); // age >= 18
euint32 result = FHE.select(isAdult, one, zero); // 1 or 0

// Grant permissions
FHE.allowThis(result);         // Contract can return handle
FHE.allow(result, msg.sender); // User can decrypt
```

### 4. Decryption Process

1. **Retrieve**: Get encrypted result handle from contract
2. **Generate Keys**: Create temporary keypair for decryption
3. **Sign**: User signs EIP-712 message with wallet
4. **Decrypt**: Call `userDecrypt()` with signature to get plaintext result
5. **Display**: Show 1 (Pass) or 0 (Fail)

## 🔒 Privacy & Security

### What's Encrypted?
- User's actual age (never exposed)
- Intermediate computation results
- Final verification result (until user decrypts)

### What's Public?
- Contract address
- Transaction hash
- User's wallet address
- Encrypted data handles (meaningless without decryption key)

### Security Features
- **No Server Decryption**: All decryption happens client-side
- **User-Controlled**: Only the user can decrypt their result
- **Zero-Knowledge Proofs**: Ensures encrypted data is valid
- **Permission System**: Dual-layer access control
- **Threshold Network**: Zama's decentralized KMS

## 🛠️ Technical Stack

### Smart Contracts
- Solidity 0.8.24
- FHEVM v0.9.1 (`@fhevm/solidity`)
- Hardhat + hardhat-deploy

### Frontend
- Next.js 15.0.0
- React 19.0.0
- RainbowKit 2.0.0
- Wagmi 2.0.0
- Ethers.js 6.9.0
- Tailwind CSS 3.4.0

### FHEVM Configuration
```javascript
{
  chainId: 11155111, // Sepolia
  aclContractAddress: '0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D',
  kmsContractAddress: '0xbE0E383937d564D7FF0BC3b46c51f0bF8d5C311A',
  inputVerifierContractAddress: '0xBBC1fFCdc7C316aAAd72E807D9b0272BE8F84DA0',
  verifyingContractAddressDecryption: '0x5D8BD78e2ea6bbE41f26dFe9fdaEAa349e077478',
  verifyingContractAddressInputVerification: '0x483b9dE06E4E4C7D35CCf5837A1668487406D955',
  gatewayChainId: 10901,
  relayerUrl: 'https://relayer.testnet.zama.org',
}
```

## 📸 Screenshots

### Landing Page
Clean introduction explaining the verification process and privacy guarantees.

### Verification Page
1. Connect wallet (RainbowKit)
2. Input age and submit
3. Wait for transaction confirmation
4. 10-second countdown for permission sync
5. Decrypt result with wallet signature
6. See Pass (✅) or Fail (❌)

## 🐛 Troubleshooting

### "FHEVM initialization failed"
- Ensure you're using a supported wallet (MetaMask recommended)
- Try incognito mode to avoid multi-wallet conflicts
- Check browser console for detailed errors

### "User decrypt failed: HTTP 500"
- Wait for the full 10-second countdown before decrypting
- Permission sync can take 30-60 seconds
- If it fails, click decrypt again (auto-retry implemented)

### "No submission found"
- Ensure your wallet is connected with the same address that submitted
- Check transaction was confirmed on [Sepolia Etherscan](https://sepolia.etherscan.io/)

### Decryption takes too long
- Normal decryption time: 30-60 seconds
- Network congestion can extend this to 2-3 minutes
- Be patient and don't refresh the page

## 🔗 Links

- **Deployed Contract**: [0x798C8Fcf112d37F98a64ffe1a8520C5230478838](https://sepolia.etherscan.io/address/0x798C8Fcf112d37F98a64ffe1a8520C5230478838)
- **Zama Docs**: https://docs.zama.org/fhevm
- **Sepolia Faucet**: https://sepoliafaucet.com/
- **FHEVM Testnet**: https://docs.zama.org/fhevm/testnet

## 📋 Project Structure

```
age-verification-fhevm/
├── packages/
│   ├── hardhat/                 # Smart contracts
│   │   ├── contracts/
│   │   │   └── AgeVerification.sol
│   │   ├── deploy/
│   │   │   └── 01_deploy_age_verification.ts
│   │   └── hardhat.config.ts
│   │
│   └── nextjs-showcase/         # Frontend
│       ├── app/
│       │   ├── layout.tsx       # Load FHEVM SDK
│       │   ├── page.tsx         # Landing page
│       │   └── verify/
│       │       └── page.tsx     # Main verification page
│       ├── components/
│       │   ├── ClientProviders.tsx
│       │   └── Providers.tsx    # RainbowKit setup
│       ├── utils/
│       │   └── wallet.ts        # Provider getter
│       ├── next.config.js       # CORS + Webpack config
│       └── vercel.json          # Deployment config
│
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

## 🎯 Core Development Principles

This project follows the **WINNING_FORMULA** for FHEVM development:

1. **Grand Narrative**: Privacy-preserving age verification for regulatory compliance
2. **Exquisite UI**: Clean, modern interface with clear user feedback
3. **Minimalist Backend**: Contract only computes, never decrypts (uses `userDecrypt`)
4. **Core Demo**: Single-button interaction focused on one key feature

## 🚦 Performance Notes

- **Contract Deployment**: ~750k gas (~$0.05 on Sepolia)
- **Age Submission**: ~300-500k gas (~$0.03 on Sepolia)
- **Encryption Time**: < 1 second
- **Transaction Confirmation**: 5-15 seconds
- **Permission Sync**: 10 seconds (forced wait)
- **Decryption Time**: 30-60 seconds (relayer processing)

## 🔮 Future Enhancements

- [ ] Support for multiple age thresholds (21+, 16+, etc.)
- [ ] Batch verification for multiple users
- [ ] NFT badge minting for verified users
- [ ] Integration with DeFi protocols requiring age verification
- [ ] Mobile wallet support (WalletConnect)
- [ ] Mainnet deployment

## 📄 License

MIT

---

**Built with ❤️ using [Zama FHEVM](https://www.zama.ai/) | Powered by Fully Homomorphic Encryption**

---

## 👨‍💻 Developer Notes

### Key Implementation Details

1. **SDK Version**: Must use 0.3.0-5 for FHEVM v0.9 compatibility
2. **initSDK()**: Must call before `createInstance()`
3. **Comparison API**: Use `FHE.ge()` not `FHE.gte()`
4. **Permission Model**: Always call both `FHE.allowThis()` and `FHE.allow()`
5. **Type Casting**: Use explicit `uint32()` conversion for `FHE.asEuint32()`
6. **CORS Headers**: Must set `credentialless` not `require-corp`
7. **Wait Time**: Enforce 10-second countdown before allowing decryption
8. **Auto-Retry**: Implement retry logic for 500 errors (permission sync)

### Environment Variables

**Backend** (`packages/hardhat/.env`):
```env
PRIVATE_KEY=0x...
ALCHEMY_API_KEY=...
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/...
```

**Frontend** (hardcoded in page.tsx):
```typescript
const CONTRACT_ADDRESS = '0x798C8Fcf112d37F98a64ffe1a8520C5230478838';
```

### Testing Checklist

- [ ] Wallet connects successfully
- [ ] FHEVM initializes without errors
- [ ] Can submit age 18+ (should return 1)
- [ ] Can submit age < 18 (should return 0)
- [ ] 10-second countdown works
- [ ] Decryption completes within 60 seconds
- [ ] Auto-retry works on 500 errors
- [ ] UI displays correct Pass/Fail result
- [ ] Can verify multiple times

---

**Need Help?** Check the WINNING_FORMULA.md guide or [open an issue](https://github.com/yourusername/age-verification-fhevm/issues).

