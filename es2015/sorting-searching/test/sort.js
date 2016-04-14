let expect = require('expect');

let {mergeSort, quickSort} = require('../sort');
let {shuffle} = require('../shuffle');


describe('Ancestor Path',  () => {
  let arr;

  beforeEach(() => {
    arr = shuffle([0,1,2,3,4,5]);
  });

  describe('Merge Sort', () => {
    it('should sort the given array', () => {
      expect(mergeSort(arr)).toEqual([0,1,2,3,4,5]);
    });
  });

  xdescribe('Quick Sort', () => {
    it('should sort the given array', () => {
      expect(quickSort(arr)).toEqual([0,1,2,3,4,5]);
    });
  });
  
});