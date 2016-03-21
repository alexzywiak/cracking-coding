const isPalindrome = (n) => {
  let pointer = n;

  const sub = (n) => {
    if(!n){
      return true;
    } else {
      let isPal = sub(n.next);
      if(isPal){
        isPal = (n.val === pointer.val);
        pointer = pointer.next;
        return isPal;
      } else {
        return false;
      }
    }
  };

  return sub(n);
};

module.exports = {isPalindrome};