var expect = require('chai').expect;

var zeroMatrix = require('../zero-matrix-es6');

describe('zero matrix', function () {
  it('should zero out all rows and columns for each zero element', function () {
    var input =  [[0,1,1,1],[1,1,1,1],[1,0,1,1]];
    var output = [[0,0,0,0], [0,0,1,1], [0,0,0,0]];
    expect(zeroMatrix(input)).to.eql(output);
  });
});