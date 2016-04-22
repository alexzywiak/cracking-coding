const robotPath = (grid) => {

  const r = grid.length - 1;
  const c = grid[0].length - 1;

  let invalidPaths = {};

  return (function sub(row, col, path){

    if(row > r || col > c){
      return false;
    }
    if(grid[row][col] === 'X'){
      return false;
    }
    if(invalidPaths['' + row + col]){
      return false;
    }
    if(row === r && col === c){
      return path.concat([[row, col]]);
    }

    path = path.concat([[row, col]]);

    const right = sub(row, col + 1, path.slice());
    const down = sub(row + 1, col, path.slice());

    if(!right && !down){
      invalidPaths['' + row + col] = true;
      return false;
    }

    if(right){
      return right;
    }

    if(down){
      return down;
    }

  })(0, 0, []);

};

module.exports = robotPath;