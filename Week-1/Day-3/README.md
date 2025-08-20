# Solidity-Grind 
## DAY 3

Today I have coded 3 contracts _AccessModifiers_,_DataTypes_,_TestFile_ 

**AccessModifiers Contract**
    - This contract simply declares some values and functions with specific access modifiers.

**DataTypes Contract** - This contract gives an overview of all the data types used in solidity.

**TestFile Contract** - This contract checks the accessible functions of AccessModifiers. It is an inherited contract so that it can only access the functions with access modifiers _public_ and _internal_.

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