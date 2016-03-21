const expect = require('expect');
const SortStack = require('../sort-stack');

describe('SortStack', () => {

  let sortStack;

  beforeEach(() => {
    sortStack = new SortStack();
  });


  it('should sort values', () => {
    sortStack.push(5);
    sortStack.push(2);
    sortStack.push(4);
    sortStack.push(1);
    sortStack.push(3);
    sortStack.push(6);

    expect(sortStack.pop()).toEqual(1);
    expect(sortStack.pop()).toEqual(2);
    expect(sortStack.pop()).toEqual(3);
    expect(sortStack.pop()).toEqual(4);
    expect(sortStack.pop()).toEqual(5);
    expect(sortStack.pop()).toEqual(6);
  });
});