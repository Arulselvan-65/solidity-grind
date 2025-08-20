import { ethers } from "ethers";
import { artifacts } from "hardhat";
// @ts-ignore
import addresses from "../ignition/deployments/chain-31337/deployed_addresses.json";


async function main() {
    const abi = (await artifacts.readArtifact("Test")).abi;

    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    let accounts = await provider.listAccounts();
    const deployer = accounts[0];
    const deployedAddress = addresses["TestModule#Test"];

    const test = new ethers.Contract(deployedAddress, abi, deployer);
    await test.createCar(8, 7265, "HAMS");
    const res = await test.getCar(0);
    console.log("Car : ", res);
}

main();