import { ethers, run, network } from "hardhat";
const SEPOLIA_CHAIN_ID = 11155111;
const main = async () => {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying...");
  const SimpleStorage = await simpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Deployed to ${SimpleStorage.address}`);

  network.config && console.log(`network ${JSON.stringify(network.config)}`);

  if (
    network.config.chainId === SEPOLIA_CHAIN_ID &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await SimpleStorage.deployTransaction.wait(6);
    await verify(SimpleStorage.address, []);
  }

  const currentValue = await SimpleStorage.retrieve();
  console.log(`current valure ${currentValue.toString()}`);
};
const verify = async (contractAddress: string, args: []) => {
  try {
    console.log("Verifying contract");
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error: any) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log({ error });
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log({ error });
    process.exit(1);
  });
