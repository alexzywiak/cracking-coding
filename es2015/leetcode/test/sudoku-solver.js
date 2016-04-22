const expect = require('expect');
const solver = require('../sudoku-solver');

describe('Sudoku Solver',() => {
  const valid = [
  [5,3,'.','.',7, '.','.','.','.'],
  [6,'.','.',1,9,5,'.','.','.'],
  ['.',9,8,'.','.', '.','.',6,'.'],

  [8,'.','.','.',6, '.','.','.',3],
  [4,'.','.',8,'.',3,'.','.',1],
  [7,'.','.','.',2, '.','.','.',6],

  ['.',6,'.','.','.', '.',2,8,'.'],
  ['.','.','.',4,1,9,'.','.',5],
  ['.','.','.','.',8, '.','.',7,9]
  ];

  const invalidRow = [
  [5,3,'.',3,7, '.','.','.','.'],
  [6,'.','.',1,9,5,'.','.','.'],
  ['.',9,8,'.','.', '.','.',6,'.'],

  [8,'.','.','.',6, '.','.','.',3],
  [4,'.','.',8,'.',3,'.','.',1],
  [7,'.','.','.',2, '.','.','.',6],

  ['.',6,'.','.','.', '.',2,8,'.'],
  ['.','.','.',4,1,9,'.','.',5],
  ['.','.','.','.',8, '.','.',7,9]
  ];

  const invalidCol = [
  [5,3,'.','.',7, '.','.','.','.'],
  [6,'.','.',1,9,5,'.','.','.'],
  ['.',9,8,'.','.', '.','.',6,'.'],

  [8,'.','.','.',6, '.','.','.',3],
  [4,'.','.',8,'.',3,'.','.',1],
  [7,'.','.','.',2, '.','.','.',6],

  [5,6,'.','.','.', '.',2,8,'.'],
  ['.','.','.',4,1,9,'.','.',5],
  ['.','.','.','.',8, '.','.',7,9]
  ];

  const invalidSquare = [
  [5,3,9,'.',7, '.','.','.','.'],
  [6,'.','.',1,9,5,'.','.','.'],
  ['.',9,8,'.','.', '.','.',6,'.'],

  [8,'.','.','.',6, '.','.','.',3],
  [4,'.','.',8,'.',3,'.','.',1],
  [7,'.','.','.',2, '.','.','.',6],

  ['.',6,'.','.','.', '.',2,8,'.'],
  ['.','.','.',4,1,9,'.','.',5],
  ['.','.','.','.',8, '.','.',7,9]
  ];

  describe('Validate Array', () => {
    it('should return true for an empty array', () => {
      expect(solver.validArray(['.','.','.','.','.','.','.','.','.'])).toEqual(true);
    });

    it('should return true for an array with unique numbers', () => {
      expect(solver.validArray([1,2,3,4,5,6,7,8,9])).toEqual(true);
    });

    it('should return false for an array with repeated numbers', () => {
      expect(solver.validArray([1,2,3,4,5,6,7,8,1])).toEqual(false);
    });
  }); 

  describe('Validate Rows', () => {
    it('should return false for board with a row conflict', () => {
      expect(solver.validRows(invalidRow)).toEqual(false);
    });

    it('should return true for a valid board', () => {
      expect(solver.validRows(valid)).toEqual(true);
    });
  }); 

  describe('Validate Cols', () => {
    it('should return false for board with a col conflict', () => {
      expect(solver.validCols(invalidCol)).toEqual(false);
    });

    it('should return true for a valid board', () => {
      expect(solver.validCols(valid)).toEqual(true);
    });
  }); 

  describe('Validate Square', () => {
    it('should return false for board with a square conflict', () => {
      expect(solver.validSquare(invalidSquare)).toEqual(false);
    });

    it('should return true for a valid board', () => {
      expect(solver.validSquare(valid)).toEqual(true);
    });
  });

  describe('Solver', () => {
    it('should return false for board any conflicts', () => {
      expect(solver.solver(invalidRow)).toEqual(false);
      expect(solver.solver(invalidCol)).toEqual(false);
      expect(solver.solver(invalidSquare)).toEqual(false);
    });

    it('should return true for a valid board', () => {
      expect(solver.solver(valid)).toEqual(true);
    });
  });
});