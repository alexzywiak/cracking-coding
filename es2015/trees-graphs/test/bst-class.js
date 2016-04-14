let expect = require('expect');

let {BinarySearchTree} = require('../bst-class');

describe('BST Class', () => {
  let rootNode;

  beforeEach(() => {
    rootNode = new BinarySearchTree(4);

    [6,2,3,1,5,7].forEach( val => {
      rootNode.add(val);
    });
  });

  it('should add new nodes in correct order', () => {
    expect(rootNode.val).toBe(4);

    expect(rootNode.left.val).toBe(2);
    expect(rootNode.left.left.val).toBe(1);
    expect(rootNode.left.right.val).toBe(3);

    expect(rootNode.right.val).toBe(6);
    expect(rootNode.right.left.val).toBe(5);
    expect(rootNode.right.right.val).toBe(7);
  });

  it('should add have a parent reference', () => {
    expect(rootNode.parent).toBe(null);

    expect(rootNode.left.parent).toBe(rootNode);
    expect(rootNode.left.left.parent).toBe(rootNode.left);

    expect(rootNode.right.parent).toBe(rootNode);
    expect(rootNode.right.left.parent).toBe(rootNode.right);
  });

  it('should add have have in order traversal', () => {
    let values = [];

    rootNode.inOrderTraversal( node => values.push(node.val));
    values.forEach( (val, index) =>{
      expect(val).toBe(index + 1);
    });
  });
}); 