exports.nthNode = (n, k) => {

  let slow = n;
  let fast = n;

  for(let i = 0; i < k; i++){
    if(fast.next){
      fast = fast.next;
    } else {
      return null;
    }
  }

  while(fast.next){
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

exports.nthNodeRecursive = (n, k) => {
  if(!n.next){
    return (k) ? k - 1 : n;
  } else {
    let out = exports.nthNodeRecursive(n.next, k);
    if(typeof out === 'number'){
      if(out === 0){
        return n;
      } else {
        return out - 1;
      }
    } else {
      return out;
    }
  }
};