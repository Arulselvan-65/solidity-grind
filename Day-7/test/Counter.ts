import { expect } from "chai";
import { network } from "hardhat";
import {MaxUint256} from "ethers";

const { ethers } = await network.connect();

describe("Counter", function () {

    describe("Events:", function () {
        it("Should emit the Increment event when calling the increment() function", async function () {
            const counter = await ethers.deployContract("Counter");
            await expect(counter.increment(1)).to.emit(counter, "Increment").withArgs(1n);
        });

        it("Should emit the Decrement event when calling the decrement() function", async function () {
            const counter = await ethers.deployContract("Counter");
            await expect(counter.decrement(1)).to.emit(counter, "Decrement").withArgs(1n);
        });
    });

    describe("Happy Flow:", function () {
        it("Should Increment the value of x by 1 when calling the increment() function", async function () {
            const counter = await ethers.deployContract("Counter");
            await counter.increment(1);
            expect(await counter.x()).to.equal(2n);
        });

        it("Should Decrement the value of x by 1 when calling the decrement() function", async function () {
            const counter = await ethers.deployContract("Counter");
            await counter.decrement(1);
            expect(await counter.x()).to.equal(0n);
        });

        it("Should Multiply the num value with by when calling the multiply() function", async function () {
            const counter = await ethers.deployContract("Counter");
            expect(await counter.multiply(5, 2)).to.equal(10);
        });

        it("Should Divide the num value with by when calling the divide() function", async function () {
            const counter = await ethers.deployContract("Counter");
            expect(await counter.divide(10,2)).to.equal(5);
        });
    });

    describe("Worst Case:", function () {
        it("Should revert on overflow when calling the increment() function", async function () {
            const counter = await ethers.deployContract("Counter");
            expect(counter.increment(MaxUint256)).to.be.revert(ethers);
        });

        it("Should revert on underflow when calling the decrement() function", async function () {
            const counter = await ethers.deployContract("Counter");
            expect(counter.decrement(MaxUint256)).to.be.revert(ethers);
        });


    });
});
