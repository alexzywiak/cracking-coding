const Queue = require('./queue');

class QueueStack {
  constructor(){
    this.temp = new Queue();
    this.store = new Queue();
  }

  push(x){
    if(!this.temp.empty()){
      this.store.push(this.temp.pop());
    }
    this.temp.push(x);
  }

  pop(){
    let val = this.temp.pop();
    while(this.store.size() > 1){
      this.temp.push(this.store.pop());
    }
    let tmp = this.temp;
    this.temp = this.store;
    this.store = tmp;

    return val;
  }

  top(){
    return this.temp.top();
  }

  empty(){
    return this.temp.empty() && this.store.empty();
  }
}

module.exports = QueueStack;