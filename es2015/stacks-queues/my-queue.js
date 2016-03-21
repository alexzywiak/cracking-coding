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

  size(){
    return this.data.length;
  }
}

class MyQueue {

  constructor(){
    this.inBox = new Stack();
    this.outBox = new Stack();
  }

  enqueue(val){
    this.inBox.push(val);
  }

  dequeue(){
    if(!this.outBox.size()){
      while(this.inBox.size()){
        let val = this.inBox.pop();
        this.outBox.push(val);
      }
    }
    return this.outBox.pop();
  }
}

module.exports = MyQueue;