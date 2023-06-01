import nx from '@jswork/next';

nx.compare = function (inNum1, inNum2) {
  var difference = inNum1 - inNum2;
  return difference === 0 ? 0 : difference / Math.abs(difference);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.compare;
}

export default nx.compare;
