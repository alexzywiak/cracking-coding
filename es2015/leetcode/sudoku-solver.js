const validArray = (arr) => {
  return !!(arr.reduce((dict, square) => {
    if(!dict){
      return false;
    }
    if(dict[square] || !/^[1-9\.]$/.test(square)){
      return false;
    }
    if(square !== '.'){
      dict[square] = true;
    }
    return dict;
  }, {}));
};

const validRows = (board) => {
  return board.reduce((isValid, row) => {
    if(!isValid){
      return false;
    }
    return validArray(row);
  }, true);
};

const validCols = (board) => {
  let col;
  for(let colIdx = 0; colIdx < 9; colIdx++){
    col = [];
    board.forEach(row => {
      col.push(row[colIdx]);
    });
    if(!validArray(col)){
      return false;
    }
  }
  return true;
};

const validSquare = (board) => {
  let square = [];

  for(let rowStart = 0; rowStart < 9; rowStart += 3){
    for(let colStart = 0; colStart < 9; colStart += 3){

      for(let rowIdx = rowStart; rowIdx < rowStart + 3; rowIdx++){
        for(let colIdx = colStart; colIdx < colStart + 3; colIdx++){
          square.push(board[rowIdx][colIdx]);
        }        
      }
      if(!validArray(square)){
        return false;
      }
      square = [];
    }
  }
  return true;
};

const solver = (board) => {
  return validRows(board) && validCols(board) && validSquare(board);
};

module.exports = {solver, validArray, validRows, validCols, validSquare};