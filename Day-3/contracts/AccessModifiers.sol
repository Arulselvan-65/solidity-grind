//SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

contract AccessModifiers {
    uint public value = 72;

    string private password = "0xdfnkjgr";

    int internal count = 3;

    bool status = false;

    function getValue() public view returns(uint){  // Can be called from anywhere(inside and outside contract)
        return value; 
    }

    function getPassword() private view returns(string memory) { // Can be called only insed the contract
        return password;
    }

    function getCount() internal view returns(int){ // Can be called from contract and derived contract alone
        return count;
    }

    function getStatus() external view returns(bool){ // Can be called only by external contracts(not from derived contract)
        return status;
    }
}
