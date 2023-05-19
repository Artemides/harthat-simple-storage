import { ethers } from "hardhat";
import { task } from "hardhat/config";

task("balance", "get balance from an account")
  .addParam("account", "the account's balances")
  .setAction(async (taskArgs, hre) => {
    const balance = await hre.ethers.provider.getBalance(taskArgs.account);
    console.log(`balance ${hre.ethers.utils.formatEther(balance)} ETH`);
  });
