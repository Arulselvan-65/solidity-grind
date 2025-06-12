// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ErrorHandling {

    uint public minValue = 5;
    uint public totalSupply = 2**255;
    uint public supply = 20;
    uint[] public values;

    function checkValue(uint _num) public view returns(bool){
        require(_num > minValue, "Value is less than min value."); // Checks whether the given value is greater than minValue.

        return true;
    }

    function addSupply(uint _num) public {
        totalSupply += _num; // Adds value to totalSupply, if overflow or underflow occurs transaction is reverted.
    }

    function divide(uint num1,uint num2) public pure returns(uint){
        if(num2 == 0) revert("Dividing by zero."); // Manually reverting the transaction if the divisor is 0.

        return num1/num2;
    }

    function addNumber(uint num) public {
        values.push(num); //Assigns values to index positions.
    }

    function getNumber(uint index) external view returns(uint) {
        return values[index]; // returns value of a specific index, reverted with Out-of-Bounds error if invalid index.
    }

    function purchase(uint num) public {
        supply -= num;

        assert(supply >= num); // Checks the internal condition, if false consumes gas and revert the transaction.
    }
        
}
