const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let util;

  beforeEach(() => {
    if (!util) {
      util = sinon.spy(console);
    }
  });

  afterEach(() => {
    util.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(util.log.calledWith('The total is: 120')).to.be.true;
    expect(util.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(util.log.calledWith('The total is: 20')).to.be.true;
    expect(util.log.calledOnce).to.be.true;
  });
});
