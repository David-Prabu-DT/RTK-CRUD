let MyClass = require("./MyClass");
let myObj = new MyClass();
let chai = require("chai");
let expect = chai.expect;
let sinon = require("sinon");
let chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);
const nock = require("nock");

describe("Test Suit", () => {
  // hooks
  before(() => {
    console.log("======== Before the test suit");
  });
  beforeEach(() => {
    console.log("======== Before Each the test suit");
  });

  after(() => {
    console.log("======== After the test suit");
  });

  afterEach(() => {
    console.log("======== After Each the test suit");
  });

  // Test the Add Method
  it("Test Add Method", () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });

  // Test the SPY Method - sinon
  it("spy the add method", () => {
    let spy = sinon.spy(myObj, "add");
    let arg1 = 10,
      arg2 = 20;

    myObj.callAdd(arg1, arg2);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(10, 20)).to.be.true;
    spy.restore();
  });

  // Mock Method - sinon
  it("Mock the sayHellocls", () => {
    let mock = sinon.mock(myObj);
    let expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("Hello");
    myObj.callAdd(10, 20);
    mock.verify();
  });
});

// STUB
describe.skip("STUB Test Suit", () => {
  // Test the Add Method
  it("Stub Test Add Method", () => {
    let stub = sinon.stub(myObj, "add");

    stub
      .withArgs(10, 20)
      .onFirstCall()
      .returns(100)
      .onSecondCall()
      .returns(200);

    expect(myObj.callAdd(10, 20)).to.be.equal(100);
    expect(myObj.callAdd(10, 20)).to.be.equal(200);
  });
});

// Promise
describe.skip("Promise Test Suit", () => {
  // Test the Add Method
  it("Test the promise", () => {
    return expect(myObj.testPromise()).to.eventually.equal(6);
  });
});

// xhr - nock
describe("XHR test suit", () => {
  it("MOck and stub xhr call", () => {
    //
  });
});
