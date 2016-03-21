const expect = require('expect');
const MinStack = require('../min-stack');

describe('MinStack', () => {
 let stack;

 beforeEach(() => {
  stack = new MinStack();
 });

 it('should push an element', () => {
  stack.push(0);
  expect(stack.data.length).toEqual(1);
  expect(stack.data[0]).toEqual(0);
 });

 it('should pop an element', () => {
  stack.push(0);
  stack.push(1);
  expect(stack.pop()).toEqual(1);
  expect(stack.data.length).toEqual(1);
 });

 it('should keep the min value', () => {
  stack.push(4);
  expect(stack.min()).toEqual(4);
  stack.push(1);
  stack.push(3);
  expect(stack.min()).toEqual(1);
 });

 it('should keep the min updated', () => {
  stack.push(4);
  expect(stack.min()).toEqual(4);
  stack.push(1);
  stack.push(3);
  stack.push(1);
  expect(stack.min()).toEqual(1);
  stack.pop();
  stack.pop();
  expect(stack.min()).toEqual(1);
  stack.pop();
  expect(stack.min()).toEqual(4);
 });

});