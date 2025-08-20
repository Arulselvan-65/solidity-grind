// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Test {

    uint public totalCars;

    struct Car {
        uint8 groupId;
        uint32 modelNum;
        string carName;
        bytes32 hashData;
    }

    mapping(uint => Car) public cars;

    function createCar(uint8 _groupId, uint32 _modelNum, string memory _carName) public {
        bytes32 dataHash = keccak256(abi.encodePacked(_groupId, _modelNum, _carName, block.timestamp));
        cars[totalCars++] = Car({
            groupId: _groupId,
            modelNum: _modelNum,
            carName: _carName,
            hashData: dataHash
        });
    }

    function getCar(uint id) external view returns(Car memory) {
        require(id < totalCars, "No Cars Found!!");
        return cars[id];
    }
}