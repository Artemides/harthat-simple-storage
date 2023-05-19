import { ethers } from "hardhat";

const main = async () => {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying...");
  const SimpleStorage = await simpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Deployed to ${SimpleStorage.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log({ error });
    process.exit(1);
  });
