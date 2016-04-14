let expect = require('expect');

let {shuffle} = require('../shuffle');


describe('Ancestor Path',  () => {
  let arr, copy;

  beforeEach(() => {
    arr = [0,1,2,3,4,5,6,7,8,9];
    copy = arr.slice();
  });

  it('should return a shuffle array', () => {
    expect(shuffle(arr)).toNotEqual(copy);
  });
  
});