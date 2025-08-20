# Solidity-Grind 
## DAY 2


### Hardhat Development Environment

- Hardhat runs a local Ethereum network for testing smart contracts, defaulting to http://127.0.0.1:8545.
- Built-in support for writing and running tests using Mocha/Chai, with detailed error traces.
- Extensible with plugins for tasks like deployment (e.g., @nomiclabs/hardhat-ethers), verification, and more.
- Customizable tasks (e.g., npx hardhat compile) to automate compilation, deployment, and scripting.


### Hardhat Environment Folder Structure

- **contracts** -> This is where your solidity smart contract code written and stored. 
- **scripts** -> This is where your deployment scripts are written.(This is changed to `ignition/modules` in latest versions) 
- **test** -> This is where Test scripts using Mocha/Chai are written

Today's task is to setup a hardhat development environment for smart contract development using solidity.

### Steps to setup Hardhat Environment 

- Create a project folder: `mkdir my-hardhat-project && cd my-hardhat-project`
- Initialize npm: `npm init -y`
- Install Hardhat: `npm install --save-dev hardhat`
- Set up Hardhat: `npx hardhat init` (choose JavaScript/TypeScript, follow prompts)
- Compile the contract: `npx hardhat compile`
- Run local hardhat node: `npx hardhat node`

---

### Happy Coding!!