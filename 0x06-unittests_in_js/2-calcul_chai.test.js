const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
  it("should return the rounded sum of two integers", function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it("should return the rounded sum of two decimals", function () {
    expect(calculateNumber('SUM', 4.5, 3.2)).to.equal(8);
  });

  it("should return the rounded sum of two negative integers", function () {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });

  it("should return the rounded sum of one decimal and one integer", function () {
    expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
  });

  it("should return the rounded difference of two integers", function () {
    expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
  });

  it("should return the rounded difference of two decimals", function () {
    expect(calculateNumber('SUBTRACT', 4.5, 3.2)).to.equal(2);
  });

  it("should return the rounded difference of two negative integers", function () {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });

  it("should return the rounded difference of one decimal and one integer", function () {
    expect(calculateNumber('SUBTRACT', 7.7, 3)).to.equal(5);
  });
  
  it("should return the quotient of two integers", function () {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
  });

  it("should return the quotient of two decimals", function () {
    expect(calculateNumber('DIVIDE', 4.5, 2.2)).to.equal(2.5);
  });

  it("should return the quotient of two negative integers", function () {
    expect(calculateNumber('DIVIDE', -3, -1)).to.equal(3);
  });

  it("should return the quotient of one decimal and one integer", function () {
    expect(calculateNumber('DIVIDE', 4.7, 4)).to.equal(1.25);
  });

  it("should return Error when 0 is divisor", function () {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
  });
});
