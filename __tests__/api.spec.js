const nx = require('@feizheng/next-js-core2');
require('../src/next-compare');

describe('api.basic test', () => {
  test('num1:2, num2: 3 => 2 cp 3->-1', function() {
    var num1 = 2;
    var num2 = 3;
    expect(nx.compare(num1, num2)).toBe(-1);
  });

  test('num1:2, num2: 1 => 2 cp 1->1', function() {
    var num1 = 2;
    var num2 = 1;
    expect(nx.compare(num1, num2)).toBe(1);
  });

  test('num1:2, num2: 2 => 2 cp 2->0', function() {
    var num1 = 2;
    var num2 = 2;
    expect(nx.compare(num1, num2)).toBe(0);
  });
});
