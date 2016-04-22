const expect = require('expect');
const Queue = require('../queue');

describe('Queue', () => {

  let queue;

  beforeEach(() => {
    queue = new Queue();
  });


  it('should push and pop the correct values', () => {
    queue.push(5);
    queue.push(2);
    queue.push(4);

    expect(queue.pop()).toEqual(5);
    expect(queue.pop()).toEqual(2);
    expect(queue.pop()).toEqual(4);
  });

  it('should know when it is empty', () => {
    expect(queue.empty()).toEqual(true);
    queue.push(1);
    expect(queue.empty()).toEqual(false);
    queue.pop();
    expect(queue.empty()).toEqual(true);    
  });

  it('should return the top value', () => {
    queue.push(1);
    expect(queue.top()).toEqual(1);
    queue.push(2);
    expect(queue.top()).toEqual(1);
    queue.pop();
    expect(queue.top()).toEqual(2);
  });
});