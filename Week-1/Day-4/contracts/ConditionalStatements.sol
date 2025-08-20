//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;

contract ConditionalStatements {

	uint public minAge = 18;
	uint public maxAge = 100;

	function checkValidAgeNotInclusive(uint _age) public view returns(bool){// if-else for checking age not inclusive to maxAge and minAge
		if(_age > minAge && _age < maxAge){
			return true;
		}
		else{
			return false;
		}
	}

	function checkValidAgeInclusive(uint _age) public view returns(bool) { // if-else for checking age inclusive to maxAge and minAge
		if(_age >= minAge && _age <= maxAge){
			return true;
		}
		else{
			return false;
		}
	}

	function getAllElementsUntilGivenValue(uint num) public pure returns(uint[] memory) { // Loops are not recommended one to use in smartcontracts it costs more gas for computation
		uint[] memory nums;

		for(uint n=0;n<num;n++){
			nums[n] = n+1;
		}

		if(nums.length > 0) // Returns the values until given range
			return nums;

		nums[0] = 1;

		return nums; // Simply returns an array with a single value
	}

}
