/*!
 * name: @jswork/next-compare
 * description: Basic compare for next.
 * homepage: https://github.com/afeiship/next-compare
 * version: 1.0.0
 * date: 2020-11-19 13:09:40
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.compare = function (inNum1, inNum2) {
    var difference = inNum1 - inNum2;
    return difference === 0 ? 0 : difference / Math.abs(difference);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compare;
  }
})();
