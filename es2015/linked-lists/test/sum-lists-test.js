var expect = require('chai').expect;

var test = require('../sum-lists-es6');

describe('sum lists', function () {
  var n1, n2;

  beforeEach(function () {
    var Node = function(val){
      this.val = val;
      this.next = null;
    };

    var a = new Node(5);
    var b = new Node(2);
    a.next = b;
    var c = new Node(3);
    b.next = c;

    var d = new Node(6);
    var e = new Node(5);
    d.next = e;
    var f = new Node(4);
    e.next = f;
    var g = new Node(8);
    f.next = g;

    n1 = a;
    n2 = d;
  });

  it('should sum two lists', function () {
    expect(test.sumList(n1, n2)).to.equal(8781);
  });

  it('should sum two lists reverse', function () {
    expect(test.sumListReverse(n1, n2)).to.equal(7071);
  });
});