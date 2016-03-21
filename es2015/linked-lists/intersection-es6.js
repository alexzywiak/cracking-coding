const intersection = (n1, n2) => {
  let n1Head = n1;
  let n2Head = n2;
  let n1Length = 0;
  let n2Length = 0;

  // Get the end of the lists
  while(n1.next || n2.next){
    if(n1.next){
      n1Length++;
      n1 = n1.next;
    }
    if(n2.next){
      n2Length++;
      n2 = n2.next;
    }
  }

  if(n1 !== n2){
    return null;
  }

  n1 = n1Head;
  n2 = n2Head;

  let diff = Math.abs(n1Length - n2Length);

  let long = n1Length > n2Length ? n1 : n2;
  let short = n1Length < n2Length ? n1 : n2;

  while(diff){
    long = long.next;
    diff--;
  }

  while(long.next && short.next){
    if(long === short){
      return long;
    } else {
      long = long.next;
      short = short.next;
    }
  }
};

module.exports = {intersection};