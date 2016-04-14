let expect = require('expect');

let {BinaryTree} = require('../bt-class');
let rootNode;

var makeTree = (vals, node, start = 0, end = vals.length - 1) => {
  if(start > end){
    return;
  }
  if(start === end){
    node.left = new BinaryTree(vals[start]);
    return;
  }
  
  let mid = Math.ceil((end - start) / 2) + start;

  node.left = new BinaryTree(vals[start++]);
  node.right = new BinaryTree(vals[end--]);
  
  makeTree(vals, node.left, start, mid - 1);
  makeTree(vals, node.right, mid, end);

};

describe('Sub Tree',  () => {
  beforeEach(() => {

    rootNode = new BinaryTree('root');
    makeTree([0,1,2,3,4,5,6], rootNode);
  });

  it('should have a tree', () => {
    expect(rootNode.right.val).toEqual(6);
    expect(rootNode.left.val).toEqual(0);
    expect(rootNode.right.left.val).toEqual(3);
  });

  describe('find sub tree', () => {

    it('should return false there is no matching rootnode', () => {
      let result = rootNode.isSubtree(new BinaryTree('fake'));
      expect(result).toEqual(false);
    });

    it('should return true if the passed tree is a subtree', () => {
      let subTree = new BinaryTree(0);
      makeTree([1,2], subTree);
      let result = rootNode.isSubtree(subTree);
      expect(result).toEqual(true);
    });

    it('should return false if the passed tree is not a complete subtree', () => {
      let subTree = new BinaryTree(0);
      makeTree([1,5], subTree);
      let result = rootNode.isSubtree(subTree);
      expect(result).toEqual(false);
    });

  });

  
});