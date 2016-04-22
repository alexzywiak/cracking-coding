var Stack = require('./stack');

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