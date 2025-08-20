const {ethers} = require("hardhat");


async function main() {

    //Deploying AccessModifier Contract
    const accessModifiersContractFactory = await ethers.getContractFactory("AccessModifiers");
    const accessModifiersContract = await accessModifiersContractFactory.deploy();
    console.log("Access Modifiers Contract Deployed to :" , accessModifiersContract.target);

    //Deploying TestFile Contract
    const testFileContractFactory = await ethers.getContractFactory("TestFile");
    const testFileContract = await testFileContractFactory.deploy();
    console.log("Test File Contract Deployed to : ", testFileContract.target);
}

main()