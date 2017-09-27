var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-compare');

describe('next/compare', function () {

  it('num1:2, num2: 3 => 2 cp 3->-1', function () {
    var num1 = 2;
    var num2 = 3;
    assert.equal(nx.compare(num1,num2), -1);
  });

  it('num1:2, num2: 1 => 2 cp 1->1', function () {
    var num1 = 2;
    var num2 = 1;
    assert.equal(nx.compare(num1,num2), 1);
  });

  it('num1:2, num2: 2 => 2 cp 2->0', function () {
    var num1 = 2;
    var num2 = 2;
    assert.equal(nx.compare(num1,num2), 0);
  });

});
