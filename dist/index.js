/*!
 * name: @jswork/next-compare
 * description: Basic compare for next.
 * homepage: https://github.com/afeiship/next-compare
 * version: 1.0.1
 * date: 2021-01-06 21:42:20
 * license: MIT
 */

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
