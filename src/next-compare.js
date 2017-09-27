(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.compare = function (inNum1, inNum2) {
    var difference = inNum1 - inNum2;
    return difference === 0 ? 0 : difference / Math.abs(difference);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compare;
  }

}());
