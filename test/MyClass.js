class MyClass {
  constructor() {
    console.log("initiate");
  }

  add(arg1, arg2) {
    let result;
    result = arg1 + arg2;
    return result;
  }
  callAdd(arg1, arg2) {
    let result = this.add(arg1, arg2);
    return result;
  }
}

module.exports = MyClass;
