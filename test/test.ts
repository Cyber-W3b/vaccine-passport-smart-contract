import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("VaccinePassport", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("VaccinePassport");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();

    expect(await instance.uri(0)).to.equal("https://gateway.pinata.cloud/ipfs/");
  });
});
