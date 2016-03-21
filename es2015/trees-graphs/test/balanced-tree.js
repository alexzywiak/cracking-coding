let expect = require('expect');

let {BinaryTree} = require('../bt-class');
let {balancedTree} = require('../balanced-tree');

describe('Graph Class', () => {
  let nodes;

  beforeEach(() => {
    nodes = [0,1,2,3,4,5].map( val => {
      return new BinaryTree(val);
    });
  });

  it('should return false for unbalanced trees', () => {
    let rootNode = new BinaryTree('root');

    rootNode.left = nodes[0];
    rootNode.left.left = nodes[1];

    expect(balancedTree(rootNode)).toBe(false);
  });

  it('should return false for nested unbalanced tress', () => {
    let rootNode = new BinaryTree('root');

    rootNode.left = nodes[0];
    rootNode.left.left = nodes[1];
    rootNode.left.left.left = nodes[2];

    rootNode.right = nodes[3];
    rootNode.right.left = nodes[4];
    rootNode.right.right = nodes[5];

    expect(balancedTree(rootNode)).toBe(false);
  });

  it('should return true for balanced trees', () => {
    let rootNode = new BinaryTree('root');

    rootNode.left = nodes[0];
    rootNode.left.left = nodes[1];
    rootNode.left.right = nodes[2];

    rootNode.right = nodes[3];
    rootNode.right.left = nodes[4];
    rootNode.right.right = nodes[5];

    expect(balancedTree(rootNode)).toBe(true);
  });
}); 