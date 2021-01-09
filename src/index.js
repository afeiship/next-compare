(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.compare = function (inNum1, inNum2) {
    var difference = inNum1 - inNum2;
    return difference === 0 ? 0 : difference / Math.abs(difference);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compare;
  }
})();
