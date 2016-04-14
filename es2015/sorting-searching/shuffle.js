const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
};

export const shuffle = (arr) => {
  let i = arr.length - 1;
  let j;
  
  while(i){
    j = Math.floor(Math.random() * i);
    swap(arr, i, j);
    i--;
  }

  return arr;
}

