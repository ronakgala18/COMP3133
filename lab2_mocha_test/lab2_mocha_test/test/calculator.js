var expect = require("chai").expect;
var calc = require("../app/calculator");

describe("Test Calcution Script", () => {
    describe("Addition", () => {
        it("add(5, 2) expected result 7 PASS", () => {
            var result = calc.add(5,2);
            expect(result).to.equal(7);
        })
        it("add(5, 2) expected result 8 FAIL", () => {
            var result = calc.add(5,2);
            expect(result).to.equal(8);
        })
    });

    describe("Subtraction", () => {
        it("sub(5, 2) expected result 3 PASS", () => {
            var result = calc.sub(5,2);
            expect(result).to.equal(3);
        })
        it("sub(5, 2) expected result 5 FAIL", () => {
            var result = calc.sub(5,2);
            expect(result).to.equal(5);
        })
    });

    describe("Multiplication", () => {
        it("mul(5, 2) expected result 10 PASS", () => {
            var result = calc.mul(5,2);
            expect(result).to.equal(10);
        })
        it("mul(5, 2) expected result 2 FAIL", () => {
            var result = calc.mul(5,2);
            expect(result).to.equal(2);
        })
    });

    describe("Division", () => {
        it("div(10, 2) expected result 5 PASS", () => {
            var result = calc.div(10,2);
            expect(result).to.equal(5);
        })
        it("div(10, 2) expected result 2 FAIL", () => {
            var result = calc.div(10,2);
            expect(result).to.equal(2);
        })
    });

});