let expect = require('expect');

let {AncestorTree} = require('../ancestor-path');
let rootNode;

var makeTree = (vals, node, start = 0, end = vals.length - 1) => {
  if(start > end){
    return;
  }
  if(start === end){
    node.left = new AncestorTree(vals[start]);
    return;
  }
  
  let mid = Math.ceil((end - start) / 2) + start;

  node.left = new AncestorTree(vals[start++]);
  node.right = new AncestorTree(vals[end--]);
  
  makeTree(vals, node.left, start, mid - 1);
  makeTree(vals, node.right, mid, end);

};

describe('Ancestor Path',  () => {
  beforeEach(() => {
    
    rootNode = new AncestorTree('root');
    makeTree([0,1,2,3,4,5,6], rootNode);
  });

  it('should have a tree', () => {
    expect(rootNode.right.val).toEqual(6);
    expect(rootNode.left.val).toEqual(0);
    expect(rootNode.right.left.val).toEqual(3);
  });

  it('should find the ancestor path for the given node', () => {
    expect(rootNode.ancestorPath(rootNode.right.left)).toEqual([rootNode.right.left, rootNode.right, rootNode]);
  });

  it('should find the last common ancestor for two nodes', () => {
    const a = rootNode.right.right.left;
    const b = rootNode.right.left;
    expect(rootNode.commonAncestor(a, b)).toEqual(rootNode.right);
  });

  it('should find the last common ancestor for two nodes', () => {
    const a = rootNode.right.right.left;
    const b = rootNode.left.left;
    expect(rootNode.commonAncestor(a, b)).toEqual(rootNode);
  });

  it('should find the last common ancestor for two nodes', () => {
    const a = rootNode.right.right.left;
    const b = rootNode.right.right;
    expect(rootNode.commonAncestor(a, b)).toEqual(rootNode.right);
  });
  
});