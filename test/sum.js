module.exports = function () {
  let args = Array.prototype.slice.call(arguments);

  if (!args.every(Number.isFinite)) {
    throw new TypeError("sum() expects only numbers.");
  }

  return args.reduce(function (a, b) {
    return a + b;
  }, 0);
};
