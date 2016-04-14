let expect = require('expect');
require('source-map-support').install();

const {BinarySearchTreeSequence} = require('../bst-sequence');

describe('BST Sequence Class', () => {
  let rootNode;

  beforeEach(() => {
    rootNode = new BinarySearchTreeSequence(4);
  });

  describe('Weave Method', function () {
    it('should weave together two arrays', () => {
      const results = rootNode.weave([1,2], [3,4], 0)
      expect(results).toInclude([0,1,2,3,4]);
      expect(results).toInclude([0,1,3,2,4]);
      expect(results).toInclude([0,3,1,2,4]);
    });
  });

  describe('WeaveLists Method', function () {
    it('should weave together two arrays of arrays', () => {
      const results = rootNode.weaveLists([[1],[2]], [[3,4], [5,6]], 0);
      expect(results).toInclude([0,1,3,4]);
      expect(results).toInclude([0,1,5,6]);
      expect(results).toInclude([0,5,2,6]);
      expect(results).toInclude([0,3,2,4]);
    });

    it('should weave together empty arrays', () => {
      const results = rootNode.weaveLists([[]], [[]], 0);
      expect(results).toEqual([[0]]);
    });

    it('should weave together single element arrays', () => {
      const results = rootNode.weaveLists([[1]], [[2]], 0);
      expect(results).toEqual([[0,1,2], [0,2,1]]);
    });

    it('should weave together one single element array', () => {
      const results = rootNode.weaveLists([[1]], [[]], 0);
      expect(results).toEqual([[0,1]]);
    });
  });

  describe('Sequence', () => {

    it('should find sequences for a given tree', () => {
      [2,1,0,6,5].forEach(val => {
        rootNode.add(val);
      });
      const results = rootNode.getSequence()
      expect(results).toInclude([4,2,1,0,6,5]);
    });
  });

}); 