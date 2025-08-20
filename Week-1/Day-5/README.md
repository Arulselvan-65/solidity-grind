# Solidity-Grind 
## DAY 5

Today I have coded a contract named _Calculator_, which has examples of using basic operators in solidity.

I have written four functions that performs addition, subtraction, multiplication and division operation. 

## Ignition Module
Today I have deployed the contract using the ignition module, which simple builds a module to deploy contracts and simplifies the process of contract deployment. 

To deploy a contract using ignition module:
```shell
npx hardhat ignition deploy ignition/modules/FILE_NAME.js --network NETWORK_NAME
```
This command deploys the contracts to the network given.

## Using Parameters in ignition module
Ignition modules in hardhat allows us to use parameters separately like using a json files, simply define a json file with parameters in ./ignition/FILE_NAME.json.

To use this parameters during testing, use the below command:
```shell
npx hardhat ignition deploy ignition/modules/FILE_NAME.js --parameters ignition/FILE_NAME.json --network NETWORK_NAME
```
To Check previous deployments:
```shell
npx hardhat ignition deployments # returns the chainId 
npx hardhat ignition status chainId # returns the deployed addresses
```

## Testing using ignition
ignition module can be used in test files also. Here is how we can do it 
- Declare a module to deploy the contract you want to test.
- Declare a fixture function to improve code reusability.
- Use describe("", function(){}) for writing test cases inside it.
- Use it("", async function() {}) for writing test cases and comparing outputs.

Example code:
```shell
describe("Lock", function () {

  const calculatoModule = buildModule("calculatorModule", (m) => {
    const calc = m.contract("Calculator");

    return { calc };
  })


  async function deployCalculatorFixture() {
    return await ignition.deploy(calculatoModule);
  }

  describe("Deployment", function () {
    it("Should deploy the contract", async function () {
      const calc = await loadFixture(deployCalculatorFixture);

      expect(await calc.address).not.equal(null);
    });
  });
```

---

### Happy Coding!!