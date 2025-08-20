# Solidity-Grind 
## DAY 4

Today I have coded a contract named _ConditionalStatements_, which has examples of using conditional statements in solidity.


**checkValidAgeNotInclusive Function**
    - This function simply checks whether the given age is within the minAge and maxAge without inclusive of minAge and maxAge ages. 

**checkValidAgeInclusive Function** - This function simply checks whether the given age is within the minAge and maxAge with inclusive of minAge and maxAge ages. 

**getAllElementsUntilGivenValue Function** - This function uses a for-loop to generate a sequence of values and stores it in a dynamic array and returns it.

**Deploy Script** - This script is used for deploying the contracts. 

# Deploying Contracts

```shell
npx hardhat compile # For compiling the contracts
npx hardaht run PATH_TO_DEPLOY_SCRIPT --network NETWORK_NAME
```

For example: `npx hardhat run ./scripts/deploy.js --network localhost`

This command deploys the contracts to the local hardhat node network.

---

### Happy Coding!!