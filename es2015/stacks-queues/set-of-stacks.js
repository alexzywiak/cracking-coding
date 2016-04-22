var Stack = require('./stack');

class SetOfStacks extends Stack {
  
  constructor(limit){
    super();
    this.limit = limit;
  }

  push(val){
    let stack = this.peek();
    if(!stack || stack.size() >= this.limit){
      stack = new Stack();
      super.push(stack);
    }
    stack.push(val);
  }

  pop(){
    let stack = this.peek();
    let val = stack.pop();

    if(!stack.size()){
      super.pop();
    }

    return val;
  }

  popAt(index){
    let stack = this.data[index];

    if(stack && stack.size()){
      return stack.pop();
    } else {
      return null;
    }
  }
}

module.exports = SetOfStacks;