/*!
 * name: @feizheng/next-compare
 * description: Basic compare for next.
 * url: https://github.com/afeiship/next-compare
 * version: 1.0.0
 * date: 2020-02-16 12:27:29
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.compare = function(inNum1, inNum2) {
    var difference = inNum1 - inNum2;
    return difference === 0 ? 0 : difference / Math.abs(difference);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compare;
  }
})();

//# sourceMappingURL=next-compare.js.map
