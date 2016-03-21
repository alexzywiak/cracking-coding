let expect = require('expect');

let SetOfStacks = require('../set-of-stacks');

describe('SetOfStacks', () => {

  let setOfStacks;

  beforeEach(() => {
    setOfStacks = new SetOfStacks(2);
  });

  it('should push values to a stack set and add new stacks as needed', () => {
    setOfStacks.push(0);
    setOfStacks.push(1);
    setOfStacks.push(2);

    expect(setOfStacks.size()).toEqual(2);
  });

  it('should pop the last value added', () => {
    setOfStacks.push(0);
    setOfStacks.push(1);
    setOfStacks.push(2);

    expect(setOfStacks.pop()).toEqual(2);
  });

  it('should remove unused stacks', () => {
    setOfStacks.push(0);
    setOfStacks.push(1);
    setOfStacks.push(2);

    setOfStacks.pop();
    expect(setOfStacks.size()).toEqual(1);
  });

  it('should pop values from substacks with popAt', () => {
    setOfStacks.push(0);
    setOfStacks.push(1);
    setOfStacks.push(2);

    expect(setOfStacks.popAt(0)).toEqual(1);
  });

  it('should not ruin everything with popAt', () => {
    setOfStacks.push(0);
    setOfStacks.push(1);
    setOfStacks.push(2);

    expect(setOfStacks.popAt(0)).toEqual(1);

    setOfStacks.pop();
    expect(setOfStacks.pop()).toEqual(0);
  });
}); 