const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
  it("should return the rounded sum of two integers", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return the rounded sum of an integer and a decimal number", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should return the rounded sum of two decimal numbers", function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return the rounded sum of two decimal numbers", function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should return the rounded sum of two negative integers", function () {
    assert.strictEqual(calculateNumber(-2, -5), -7);
  });

  it("should return the rounded sum of a negative integer and a negative decimal number", function () {
    assert.strictEqual(calculateNumber(-2, -5.3), -7);
  });

  it("should return the rounded sum of two negative decimal numbers", function () {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it("should return the rounded sum of a positive and a negative number", function () {
    assert.strictEqual(calculateNumber(2.5, -3.5), 0);
  });

  it("should return 0 when both arguments are 0", function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it("should return the rounded value when one argument is 0", function () {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
  });
});
