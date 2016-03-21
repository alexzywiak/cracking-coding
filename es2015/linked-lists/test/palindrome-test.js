var expect = require('chai').expect;

var test = require('../palindrome-es6');

describe('palindrome list', function () {
  var n1, n2;

  beforeEach(function () {
    var Node = function(val){
      this.val = val;
      this.next = null;
    };

    var a = new Node(1);
    var b = new Node(2);
    a.next = b;
    var c = new Node(2);
    b.next = c;
    var d = new Node(1);
    c.next = d;

    var e = new Node(5);
    var f = new Node(4);
    e.next = f;
    var g = new Node(8);
    f.next = g;

    n1 = a;
    n2 = e;
  });

  it('return true for a palindrome list', function () {
    expect(test.isPalindrome(n1));
  });

  it('should return false for asymmetric list', function () {
    expect(test.isPalindrome(n2)).to.equal(false);
  });
});