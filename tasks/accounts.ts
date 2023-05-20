import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

export default task(
  "accounts",
  "prints all the accounts with their private keys",
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const accounts = await hre.ethers.getSigners();
    accounts.map((account) =>
      console.log(`Acc:${account.address} \n Pk:${account}`)
    );
  }
);
