const expect = require('chai').expect;
const loopFinder = require('../loop-detection').loopFinder;
const hasLoop = require('../loop-detection').hasLoop;

describe('inteserction', () => {
  let a, b, c, d, e, f;

  beforeEach(() => {
    class Node {
      constructor(val){
        this.val = val;
        this.next = null;
      }
    };

    a = new Node('a');
    b = new Node('b');
    a.next = b;
    c = new Node('c');
    b.next = c;
    d = new Node('d');
    c.next = d;
    e = new Node('e');
    d.next = e;
    f = new Node('f');
    e.next = f;
  });

  describe('loopFinder', () => {

    it('should return false for lists without a loop', () => {
      expect(loopFinder(a)).to.equal(false);
    });

    it('should return the node where the loop begins for looped lists', () => {
      f.next = c;
      expect(loopFinder(a)).to.equal(c);
    });

    it('should return the node where the loop begins for looped lists', () => {
      f.next = a;
      expect(loopFinder(a)).to.equal(a);
    });
  });
});