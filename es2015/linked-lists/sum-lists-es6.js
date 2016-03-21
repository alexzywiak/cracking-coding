const sumList = (n1, n2, depth = 0) => {
  if(!n1 && !n2){
    return 0;
  } else {
    let sum = 0;
    if(n1){
      sum += n1.val * Math.pow(10, depth);
      n1 = n1.next;
    }
    if(n2){
      sum += n2.val * Math.pow(10, depth);
      n2 = n2.next;
    }
    sum += sumList(n1, n2, depth + 1);
    return sum;
  }
};

const sumListReverse = (list1, list2) => {
  
  let sum = 0;
  let n1Depth = 0;
  let n2Depth = 0;

  const add = (value, depth) => {
    sum += value * Math.pow(10, depth);
  };

  const sub = (n1, n2) => {
    if(!n1.next && !n2.next){
      if(n1.val !== null){
        sum += n1.val * Math.pow(10, n1Depth);
        n1Depth++;
      }
      if(n2.val !== null){
        sum += n2.val * Math.pow(10, n2Depth);
        n2Depth++;
      }
      return;
    } else {
      if(!n1.next){
        n1.next = {val:null, next:null};
      }
      if(!n2.next){
        n2.next = {val:null, next:null};
      }
      sub(n1.next, n2.next);
      if(n1.val !== null){
        sum += n1.val * Math.pow(10, n1Depth);
        n1Depth++;
      }
      if(n2.val !== null){
        sum += n2.val * Math.pow(10, n2Depth);
        n2Depth++;
      }
    }
  };

  sub(list1, list2);

  return sum;
};

module.exports = {sumList, sumListReverse};