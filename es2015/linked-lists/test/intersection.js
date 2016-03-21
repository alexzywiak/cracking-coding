const expect = require('chai').expect;
const intersection = require('../intersection-es6').intersection;

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
    e = new Node('e');
    d.next = e;
    f = new Node('f');
    e.next = f;
  });

  it('should return the diverging node from intersecting lists', () => {
    b.next = e;
    expect(intersection(a, d)).to.equal(e);
  });

  it('should return the null from non-intersecting lists', () => {
    expect(intersection(a, d)).to.equal(null);
  });
});