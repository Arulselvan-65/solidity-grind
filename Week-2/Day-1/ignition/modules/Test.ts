import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TestModule", (m) =>{
    const test = m.contract("Test");

    return { test };

})