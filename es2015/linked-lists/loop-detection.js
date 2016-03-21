const loopFinder = (n) => {
  let fast = n;
  let slow = n;

  let headPointer = n;
  let collisionPointer;

  // Find if there is a loop
  while(fast.next && fast.next.next){
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow){
      collisionPointer = fast;
      break;
    }
  }


  if(!collisionPointer){
    return false;
  }

  // Both are k steps from loop start
  while(headPointer !== collisionPointer){
    headPointer = headPointer.next;
    collisionPointer = collisionPointer.next;
  }

  return headPointer;

};

module.exports = {loopFinder};