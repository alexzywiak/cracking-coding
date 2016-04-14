import expect from 'expect';
import {BinarySearchTree} from '../bst-class';
import {next} from '../next';

describe('Next', () => {
  let rootNode;

  beforeEach(() => {
    rootNode = new BinarySearchTree(4);

    [6,2,3,1,5,7].forEach( val => {
      rootNode.add(val);
    });
  });
  
  it('should be a function', () => {
    expect(next).toBeA('function');
  });

  it('shoud return null if given a null node', () => {
    expect(next(null)).toBe(null);
  });

  it('should find the next node by value with a right sub tree', () => {
    expect(next(rootNode)).toBe(rootNode.right.left);
  });

  it('should find the next node by value without a right subtree', () => {
    expect(next(rootNode.left.right)).toBe(rootNode);
    expect(next(rootNode.right.left)).toBe(rootNode.right);
  });

  it('should return null if there is no successor node', () => {
    expect(next(rootNode.right.right)).toBe(null);
  });
});