var expect = require('chai').expect;

var kthNode = require('../kth-node-es6');

describe('kth node', function () {
  var a, b, c, d;

  beforeEach(function () {
    var Node = function(val){
      this.val = val;
      this.next = null;
    };

    a = new Node('a');
    b = new Node('b');
    a.next = b;
    c = new Node('c');
    b.next = c;
    d = new Node('d');
    c.next = d;
  });

  it('should return the kth node from last', function () {

    expect(kthNode.nthNode(a, 2)).to.equal(b);
    expect(kthNode.nthNode(a, 1)).to.equal(c);
    expect(kthNode.nthNode(a, 0)).to.equal(d);
  });

  it('should return the kth node from last recursively', function () {

    expect(kthNode.nthNodeRecursive(a, 2)).to.equal(b);
    expect(kthNode.nthNodeRecursive(a, 1)).to.equal(c);
    expect(kthNode.nthNodeRecursive(a, 0)).to.equal(d);
  });
});