var Stack = require('./stack');

class MinStack extends Stack{
  constructor(){
    super();
    this.minStack = new Stack();
  }

  push(val){
    super.push(val);
    if(this.min() === undefined || this.min() >= val){
      this.minStack.push(val);
    }
  }

  pop(){
    let val = super.pop();
    if(val === this.min()){
      this.minStack.pop();
    }
    return val;
  }

  min(){
    return this.minStack.peek();
  }
}

module.exports = MinStack;