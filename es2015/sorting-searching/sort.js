const swap = (items, i, j) => {
  let tmp = items[i];
  items[i] = items[j];
  items[j] = tmp;
  return items;
};

const partition = (items, left, right) => {

};

export const quickSort = (items, left = 0, right = items.length - 1) => {
  if(left < right){
    let index = partition(items, left, right);
    quickSort(items, left, index - 1);
    quickSort(items, index, right);
  }
};

const merge = (a, b) => {
  let i = 0;
  let j = 0;
  let result = [];
  while(i < a.length && j < b.length){
    if(a[i] < b[j]){
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }
  if(i < a.length){
    result = result.concat(a.slice(i));
  }
  if(j < b.length){
    result = result.concat(b.slice(j));
  }
  return result;
};

export const mergeSort = (arr) => {
  if(arr.length === 1){
    return arr;
  } else {

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }
};

