// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract StorageContract {

    uint public age;

    function set(uint _age) public {
        age = _age;
    } 

    function get() public view returns(uint) {
        return age;
    }


}
