import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("\n🚀 Deploying AgeVerification contract...");
  console.log("Deployer address:", deployer);

  const deployment = await deploy("AgeVerification", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  console.log("\n✅ AgeVerification deployed to:", deployment.address);
  console.log("Transaction hash:", deployment.transactionHash);
  console.log("Gas used:", deployment.receipt?.gasUsed.toString());
};

export default func;
func.tags = ["AgeVerification"];

