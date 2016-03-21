module.exports = (matrix) => {
  // check dimensions
  const n = matrix.length;
  const m = matrix[0].length;

  matrix.forEach( row => {
    if (!row.length && row.length !== m) {
      throw 'invalid matrix'
    }
  });

  // Build up row/col dictionary
  let toZero = {
    cols: {},
    rows: {}
  };

  matrix.forEach((row, y) => {
    row.forEach((element, x) => {
      if(element === 0){
        toZero.cols[x] = true;
        toZero.rows[y] = true;
      }
    });
  });

  const zeroRows = (rows, matrix) => {
    for(let y in rows){
      for(let x = 0; x < matrix[y].length; x++){
        matrix[y][x] = 0;
      }
    }
  };

  const zeroCols = (cols, matrix) => {
    for(let x in cols){
      for(let y = 0; y < matrix.length; y++){
        matrix[y][x] = 0;
      }
    }
  };

  zeroRows(toZero.rows, matrix);
  zeroCols(toZero.cols, matrix);

  return matrix;
}