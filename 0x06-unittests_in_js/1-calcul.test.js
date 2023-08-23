const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
  it("should return the rounded sum of two integers", function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it("should return the rounded sum of two decimals", function () {
    assert.strictEqual(calculateNumber('SUM', 4.5, 3.2), 8);
  });

  it("should return the rounded sum of two negative integers", function () {
    assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
  });

  it("should return the rounded sum of one decimal and one integer", function () {
    assert.strictEqual(calculateNumber('SUM', 1.7, 3), 5);
  });

  it("should return the rounded difference of two integers", function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
  });

  it("should return the rounded difference of two decimals", function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 3.2), 2);
  });

  it("should return the rounded difference of two negative integers", function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
  });

  it("should return the rounded difference of one decimal and one integer", function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.7, 3), 5);
  });
  
  it("should return the quotient of two integers", function () {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
  });

  it("should return the quotient of two decimals", function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.2), 2.5);
  });

  it("should return the quotient of two negative integers", function () {
    assert.strictEqual(calculateNumber('DIVIDE', -3, -1), 3);
  });

  it("should return the quotient of one decimal and one integer", function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4.7, 4), 1.25);
  });

  it("should return Error when 0 is divisor", function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });
});
