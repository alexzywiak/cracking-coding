const expect = require('expect');
const robotPath = require('../robot-path');

describe('robot path', () => {

  // 'X' -> Blocked Square, '_' -> Passable Square
  const grid = [
  ['_', '_', '_', '_'],
  ['_', 'X', '_', '_'],
  ['_', '_', 'X', 'X'],
  ['_', 'X', '_', '_'],
  ];

  const invalidGrid = [
  ['_', '_', '_', '_'],
  ['_', 'X', '_', '_'],
  ['_', '_', 'X', 'X'],
  ['_', 'X', '_', '_'],
  ];

  it('should return a valid path', () => {
    expect(robotPath(grid)).toNotEqual(false);
  });

  it('should return false if there is no valid path', () => {
    expect(robotPath(invalidGrid)).toEqual(false);
  });
});