class Queue {
  constructor(){
    this.data = [];
  }

  push(x){
    this.data.push(x);
  }

  pop(){
    return this.data.shift();
  }

  top(){
    return this.data[0];
  }

  size(){
    return this.data.length;
  }

  empty(){
    return this.data.length === 0;
  }
}

module.exports = Queue;