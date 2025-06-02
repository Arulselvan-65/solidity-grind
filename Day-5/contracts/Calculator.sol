// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Calculator {

    function add(uint num1, uint num2) external pure returns(uint) {
        return num1 + num2;
    }

    function subtract(uint num1, uint num2) external pure returns(uint) {
        if (num1 > num2)
            return num1 - num2;

        return num2 - num1;
    }

    function multiply(uint num1, uint num2) external pure returns(uint) {
        return num1 * num2;
    }

    function divide(uint num1, uint num2) external pure returns(uint) {
        if(num2 != 0)
            return num1/num2;
    
        return 0;
    }
}
