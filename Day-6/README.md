# Solidity-Grind  
## DAY 6 - Error Handling in Solidity  

Today, I implemented a contract named **ErrorHandling**, which demonstrates different error handling techniques in Solidity, including:  
- **`require()`** - Validates conditions and reverts with a custom message if false.  
- **`revert()`** - Explicitly reverts transactions with a custom error message.  
- **`assert()`** - Checks for internal invariants and reverts if violated.  
- **Default Exceptions** - Handles overflow, underflow, and out-of-bounds errors.  

### Contract Features  
1. **`checkValue(uint _num)`**  
   - Uses `require()` to ensure a value is greater than a minimum threshold.  
2. **`addSupply(uint _num)`**  
   - Demonstrates default overflow/underflow checks.  
3. **`divide(uint num1, uint num2)`**  
   - Uses `revert()` to prevent division by zero.  
4. **`getNumber(uint index)`**  
   - Handles array out-of-bounds access.  
5. **`purchase(uint num)`**  
   - Uses `assert()` to ensure supply does not go negative.  

---  

## Testing with Ignition  
Tests are written using **Chai**, with Ignition for deployment.  

### Example Test Structure  
```javascript  
describe("ErrorHandling", function () {
  const errorHandlingModule = buildModule("ErrorHandling", (m) => {
    const errHandMod = m.contract("ErrorHandling");
    return { errHandMod };
  });

  async function deployFixture() {
    return await ignition.deploy(errorHandlingModule);
  }

  describe("Deployment", function () {
    it("Should deploy the contract", async function () {
      const { errHandMod } = await loadFixture(deployFixture);
      expect(await errHandMod.address).not.equal(null);
    });
  });

  describe("Require function() test", function () {
    it("Should revert when value < minValue", async function () {
      const { errHandMod } = await loadFixture(deployFixture);
      await expect(errHandMod.checkValue(5)).to.be.revertedWith("Value is less than min value.");
    });
  });
});
```  

### Key Test Cases  
- **`require()`** - Checks value validation.  
- **`revert()`** - Ensures division by zero fails.  
- **`assert()`** - Validates supply constraints.  
- **Default Exceptions** - Tests overflow and array access errors.  

---  

## Happy Coding! 🚀  
