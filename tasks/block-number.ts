import { task } from "hardhat/config";

task("block-number", "get the block you are working with").setAction(
  async (taskArgs, hre) => {
    const blockNumber = hre.ethers.provider.blockNumber;
    console.log(`Block ${blockNumber}`);
  }
);
