const expect = require('expect');

const MyQueue = require('../my-queue');

describe('MyQueue', () => {

  let myQueue;

  beforeEach(() => {
    myQueue = new MyQueue();
  });
  
  it('should add to the front of the queue', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);

    expect(myQueue.inBox.size()).toEqual(2);
  });

  it('should remove from the end of the queue', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);

    expect(myQueue.dequeue()).toEqual(1);
    expect(myQueue.inBox.size()).toEqual(0);
  });
});