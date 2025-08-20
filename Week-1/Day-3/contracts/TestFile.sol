//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;

import "./AccessModifiers.sol";
import "hardhat/console.sol";

contract TestFile is AccessModifiers {

    function getValueFromAccessModifiers() public view returns(uint) { // Calling Public function of AccessModifiers
        return getValue();
    }

    function getCountFromAccessModifiers() public view returns(int) { // Calling Internal function of AccessModifiers
        return getCount();
    }
}

