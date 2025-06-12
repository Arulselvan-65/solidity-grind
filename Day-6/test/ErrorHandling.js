const {  loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { expect } = require("chai");

describe("ErrorHandling", function () {

  const errorHandlingModule = buildModule("ErrorHandling", (m) => {
    const errHandMod = m.contract("ErrorHandling");

    return { errHandMod };
  })


  async function deployFixture() {
    return await ignition.deploy(errorHandlingModule);
  }

  describe("Deployment", function () {
    it("Should deploy the contract", async function () {
      const calc = await loadFixture(deployFixture);

      expect(await calc.address).not.equal(null);
    });
  });

  describe("Require function() test", function() {
    it("Should revert when given value is less than minimum value", async function () {
        const {errHandMod} = await loadFixture(deployFixture);

      await expect(errHandMod.checkValue(5)).to.be.revertedWith("Value is less than min value.");
    });

    it("Should not revert if the value is greater than the min value", async function(){
      const {errHandMod} = await loadFixture(deployFixture);

      expect(await errHandMod.checkValue(6)).equal(true);
    });
  });

  describe("Default Exceptions", function(){

    it("Should be reverted when overflow", async function(){
      const {errHandMod} = await loadFixture(deployFixture);

      await expect(errHandMod.addSupply(2n**255n)).to.be.reverted;
    });

     it("Should not be reverted when value is correct", async function(){
      const {errHandMod} = await loadFixture(deployFixture);
      const totalSupply = await errHandMod.totalSupply();
      
      await errHandMod.addSupply(2)
      expect(await errHandMod.totalSupply()).equal(totalSupply + 2n);
    });

    it("Should be reverted when wrong index passed to access array data", async function () {
      const {errHandMod} = await loadFixture(deployFixture);

      await expect(errHandMod.getNumber(0)).to.be.reverted;
    });

    it("Should not be reverted when correct index passed to access array data", async function () {
      const {errHandMod} = await loadFixture(deployFixture);

      await errHandMod.addNumber(1);
      await errHandMod.addNumber(2);

      expect(await errHandMod.getNumber(0)).to.equal(1);
    });
  });

  describe("Revert function test", function() {
    it("Should revert when divide by 0", async function () {
        const {errHandMod} = await loadFixture(deployFixture);

        await expect(errHandMod.divide(1,0)).to.be.revertedWith("Dividing by zero.");
    });
    it("Should not be reverted when divided by other numbers except 0", async function () {
        const {errHandMod} = await loadFixture(deployFixture);

        expect(await errHandMod.divide(20,5)).to.equal(4);
    });
  });

  describe("Assert function test", function() {
    it("Should not be reverted while purchase less than Supply", async function () {
      const {errHandMod} = await loadFixture(deployFixture);
      const Supply = await errHandMod.supply();

      await errHandMod.purchase(2);
      expect(await errHandMod.supply()).to.equal(Supply - 2n);
    });

     it("Should be reverted while purchase greater than Supply", async function () {
      const {errHandMod} = await loadFixture(deployFixture);
      const Supply = await errHandMod.supply();

      await expect(errHandMod.purchase(21)).to.be.reverted;
    });
  });

});
