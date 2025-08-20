# Day-7 Weekly Review & Mini Project

This project is a simple **Counter smart contract** written in Solidity. It includes **increment, decrement, multiply, and divide** functionalities with event emissions and safety checks. The project also has **test cases** written in Hardhat using Chai for validation.

---

## Smart Contract: `Counter.sol`

* `x` is initialized with value `1`.
* `increment(uint by)`: Increases `x` by the given value and emits an `Increment` event.
* `decrement(uint by)`: Decreases `x` by the given value and emits a `Decrement` event.
* `multiply(uint num, uint by)`: Multiplies `num` with `by` and returns the result. Requires `by > 0`.
* `divide(uint num, uint by)`: Divides `num` by `by`. Reverts if `by == 0`.

---

## Test Cases

The test cases cover:

### Events

* ✅ Emits Increment event when calling increment().

* ✅ Emits Decrement event when calling decrement().
### Happy Flow

* ✅ Incrementing increases x correctly.

* ✅ Decrementing decreases x correctly.

* ✅ Multiplication returns the correct product.

* ✅ Division returns the correct quotient.

### Worst Case

* ❌ Reverts on overflow when incrementing with MaxUint256.

* ❌ Reverts on underflow when decrementing with MaxUint256.

* ❌ Reverts if factor is not positive when calling multiply().

* ❌ Reverts if divisor is 0 when calling divide()
---

## Commands

### Compile the smart contract

```bash
npx hardhat compile
```

### Deploy the contract

```bash
npx hardhat ignition deploy ignition/modules/Test.ts
```

### Run the tests

```bash
npx hardhat test
```

---

✅ This project demonstrates Solidity basics (state variables, events, require/revert, overflow/underflow handling) along with proper testing using **Hardhat + Chai**.

---
## Happy Coding!