const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { expect, assert } = require("chai");

describe("Lock", function () {

  const calculatoModule = buildModule("calculatorModule", (m) => {
    const calc = m.contract("Calculator");

    return { calc };
  }

  )
  async function deployCalculatorFixture() {
    return await ignition.deploy(calculatoModule);
  }

  describe("Deployment", function () {
    it("Should deploy the contract", async function () {
      const calc = await loadFixture(deployCalculatorFixture);

      expect(await calc.address).not.equal(null);
    });
  });

  describe("Calculator", function() {
    it("Should add two numbers",  async function () {
      const {calc} = await loadFixture(deployCalculatorFixture);

      assert.equal(await calc.add(5,6), 11);
    });

     it("Should subtract two numbers",  async function () {
      const {calc} = await loadFixture(deployCalculatorFixture);

      assert.equal(await calc.subtract(5,6), 1);
    });

     it("Should multiply two numbers",  async function () {
      const {calc} = await loadFixture(deployCalculatorFixture);

      assert.equal(await calc.multiply(5,6), 30);
    });

     it("Should divide two numbers",  async function () {
      const {calc} = await loadFixture(deployCalculatorFixture);

      assert.equal(await calc.divide(20,5), 4);
    });

     it("Should return 0 if divisor is 0",  async function () {
      const   {calc} = await loadFixture(deployCalculatorFixture);

      assert.equal(await calc.divide(5,0), 0);
    });
  });
  
  


});

