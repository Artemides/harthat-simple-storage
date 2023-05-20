import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";
import { assert } from "chai";

describe("SimpleStorage", function () {
  let simpleStorageFactory: SimpleStorage__factory,
    SimpleStorage: SimpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await SimpleStorage.retrieve();
    const expectedValue = "0";

    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should update when calling store", async function () {
    const expectedValue = "100";
    const txResponse = await SimpleStorage.store(expectedValue);
    await txResponse.wait(1);
    const currentValue = await SimpleStorage.retrieve();

    assert.equal(currentValue.toString(), expectedValue);
  });
});
