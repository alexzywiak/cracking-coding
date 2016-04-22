const expect = require('expect');
const StackAsQueues = require('../stack-as-queues');

describe('StackAsQueues', () => {

  let queueStack;

  beforeEach(() => {
    queueStack = new StackAsQueues();
  });


  it('should push and pop the correct values', () => {
    queueStack.push(5);
    queueStack.push(2);
    queueStack.push(4);

    expect(queueStack.pop()).toEqual(4);
    expect(queueStack.pop()).toEqual(2);
    expect(queueStack.pop()).toEqual(5);
  });

  it('should know when it is empty', () => {
    expect(queueStack.empty()).toEqual(true);
    queueStack.push(1);
    expect(queueStack.empty()).toEqual(false);
    queueStack.pop();
    expect(queueStack.empty()).toEqual(true);    
  });

  it('should return the top value', () => {
    queueStack.push(1);
    expect(queueStack.top()).toEqual(1);
    queueStack.push(2);
    expect(queueStack.top()).toEqual(2);
    queueStack.pop();
    expect(queueStack.top()).toEqual(1);
  });
});