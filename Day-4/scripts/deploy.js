const {ethers} = require("hardhat")

async function main() {
    const conditionalStatementsContractFactory = await ethers.getContractFactory("ConditionalStatements");
    const conditionalStatementsContract = await conditionalStatementsContractFactory.deploy();

    console.log("Conditional Statements Contract deployed to : ", conditionalStatementsContract.target);
}

main()