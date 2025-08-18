// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    uint public x;

    event Increment(uint by);
    event Decrement(uint by);
    event Multiply(uint by);
    event Divide(uint by);

    function increment() public {
        x++;
        emit Increment(1);
    }

    function decrement() public {
        x--;
        emit Decrement(1);
    }

    function multiply(uint num, uint by) public {
        require(by > 0, "multiply: factor should be positive");
        uint res = num * by;
        emit Multiply(by);
        return res;
    }

    function divide(uint num, uint by) public  {
        if(by == 0) revert("Dividing by zero.");
        uint res = num / by;
        emit Divide(by);
        return res;
    }
}
