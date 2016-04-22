const expect = require('expect');
const Stack = require('../stack');

describe('Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });


  it('should push and pop the correct values', () => {
    stack.push(5);
    stack.push(2);
    stack.push(4);

    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(5);
  });

  it('should know when it is empty', () => {
    expect(stack.empty()).toEqual(true);
    stack.push(1);
    expect(stack.empty()).toEqual(false);
    stack.pop();
    expect(stack.empty()).toEqual(true);    
  });

  it('should return the top value', () => {
    stack.push(1);
    expect(stack.top()).toEqual(1);
    stack.push(2);
    expect(stack.top()).toEqual(2);
    stack.pop();
    expect(stack.top()).toEqual(1);
  });
});