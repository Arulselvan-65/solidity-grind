const {ethers} = require("hardhat")

async function main() {
    //Getting contract factory of the contract
    const conditionalStatementsContractFactory = await ethers.getContractFactory("ConditionalStatements");

    //Deploying the contract factory
    const conditionalStatementsContract = await conditionalStatementsContractFactory.deploy();

    console.log("Conditional Statements Contract deployed to : ", conditionalStatementsContract.target);
}

main()