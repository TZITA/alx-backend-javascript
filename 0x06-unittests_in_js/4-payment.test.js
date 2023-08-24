const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const util = sinon.spy(console);
    const stub1 = sinon.stub(Utils, 'calculateNumber');

    stub1.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub1.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub1.callCount).to.be.equal(1);
    expect(util.log.calledWith('The total is: 10')).to.be.true;
    expect(util.log.callCount).to.be.equal(1);
    stub1.restore();
    util.log.restore();
  });
});
