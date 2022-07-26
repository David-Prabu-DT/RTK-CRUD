const { rejects } = require("assert");
const { resolve } = require("path");

class MyClass {
  constructor() {
    console.log("initiate");
  }

  sayHello(str) {
    console.log(str);
  }

  add(arg1, arg2) {
    let result;
    result = arg1 + arg2;
    return result;
  }

  callAdd(arg1, arg2) {
    this.sayHello("Hello");
    let result = this.add(arg1, arg2);
    return result;
  }

  testPromise() {
    return new Promise((resolve, _reject) => {
      setTimeout(() => resolve(3), 1000);
    }).then((result) => {
      return result * 2;
    });
  }

  xhrFn() {
    return new Promise((_resolve, _reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("post", "http://echo-service-new.herokuapp.com/echo", true);
    });
  }
}

module.exports = MyClass;
