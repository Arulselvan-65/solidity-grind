// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract DataTypes {
    uint public count = 6; //Unsigned Integer || uint8, uint16, uint32, ...... uint256

    int public negativeCount = -2; // Signed Integer || int8, int16, int32, ...... int256

    string public text = "Solidity Grind"; // String || UTF-8 encoding || high gas 

    bool public isAlive = true; // Boolean

    address public ethAddress = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8; // Address

    bytes public welcomeMessage = "Hi, welcome to solidity grind!!!"; // Bytes similar to String || no encoding || less gas

    bytes32 public passCode = "d65vfd67v5drg48v5fgcb8745fg54bg8"; // Bytes type fixed-size array

    bytes3 public msg3B = "hai"; // 3 Bytes value
 
    bytes5 public msg5B = "hello"; // 5 Bytes value
}
