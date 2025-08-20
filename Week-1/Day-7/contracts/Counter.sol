// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    uint public x=1;

    event Increment(uint by);
    event Decrement(uint by);

    function increment(uint by) public {
        x+=by;
        emit Increment(by);
    }

    function decrement(uint by) public {
        x-=by;
        emit Decrement(by);
    }

    function multiply(uint num, uint by) public pure returns(uint) {
        require((num > 0 && by > 0), "multiply: factor should be positive");
        uint res = num * by;
        return res;
    }

    function divide(uint num, uint by) public pure returns(uint) {
        if(by == 0) revert("divide: divisor should not be zero");
        uint res = num / by;
        return res;
    }
}
