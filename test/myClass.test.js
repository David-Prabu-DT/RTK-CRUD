let MyClass = require("./MyClass");
let myObj = new MyClass();
let expect = require("chai").expect;
let sinon = require("sinon");

describe("Test Suit", () => {
  // Test the Add Method
  it("Test Add Method", () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });

  // Test the SPY Method
  it("spy the add method", () => {
    let spy = sinon.spy(myObj, "add");
    let arg1 = 10,
      arg2 = 20;

    myObj.callAdd(arg1, arg2);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(10, 20)).to.be.true;
  });
});
