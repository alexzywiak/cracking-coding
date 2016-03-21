class Stack {
  constructor(){
    this.data = [];
  }

  push(val){
    this.data.push(val);
  }

  pop(){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}

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