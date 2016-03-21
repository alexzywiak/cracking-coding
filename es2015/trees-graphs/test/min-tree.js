const expect = require('expect');

const {minTree} = require('../min-tree');

describe('minTree', () => {

  it('should create a tree of min height given a sorted list of odd length', () => {
    const list = [0,1,2,3,4,5,6];
    const tree = minTree(list);
    expect(tree.val).toEqual(3);
    expect(tree.left.val).toEqual(1);
    expect(tree.left.left.val).toEqual(0);

    expect(tree.right.val).toEqual(5);
    expect(tree.right.left.val).toEqual(4);
    expect(tree.right.right.val).toEqual(6);
  });

  it('should create a tree of min height given a sorted list of even length', () => {
    const list = [0, 1, 2, 3];
    const tree = minTree(list);
    expect(tree.val).toEqual(2);
    expect(tree.left.val).toEqual(1);
    expect(tree.left.left.val).toEqual(0);
    expect(tree.left.right).toEqual(null);

    expect(tree.right.val).toEqual(3);
    expect(tree.right.right).toEqual(null);
    expect(tree.right.left).toEqual(null);
  });
}); 