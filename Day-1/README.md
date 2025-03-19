# Solidity-Grind 
## DAY 1


### Solidity Programming Language 

- Solidity is a statically-typed, curly-bracket language.
- It is an object-oriented, high-level language used for implementing smartcontracs.
- It is influenced by programming languages such as C++, Python and Javascript.
- It supports Inheritance, libraries and user-defined types.

### VS Code for Development

- Extensions like Solidity make coding Ethereum smart contracts easy with syntax highlighting and compilation.
- Built-in debugging and testing tools streamline blockchain development workflows.
- Runs on Windows, Mac, and Linux, perfect for any blockchain developer.


Today's task is to implement a simple storage contract, that stores and retrives age. 

### Basic Syntax of a smartcontract
- The first line of all the smartcontracts tells you that under which license type the source-code is licensed.

- The pragmas are common instructions for compilers about how to treat the source code.

### Code Explanation

`// SPDX-License-Identifier: MIT` -> This line tells you that the source code is licensed under the MIT. 

`pragma solidity 0.8.28;` -> This represents that the source code is using solidity version 0.8.28.

`uint public age;`  ->  Public variable to store age.

`set(uint _age)` -> This function takes a unsigned integer(uint) as input and stores it in the age variable. 

`get()` -> This function is used to retrive the stored value.

---

### Happy Coding!!