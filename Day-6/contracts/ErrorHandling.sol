// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ErrorHandling {

    uint public minValue = 5;


    function checkValue(uint _num) public view returns(bool){
        require(_num > minValue, "Value is less than min value.");

        return true;
    }

     function checkValueUsingRevert(uint _num) public view returns(bool){
        if(_num < minValue)
            revert("Value is less than min value.");

        return true;
    }


   
}
