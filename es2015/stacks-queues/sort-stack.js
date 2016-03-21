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

class SortStack {
  constructor(){
    this.main = new Stack();
    this.temp = new Stack();
  }

  push(val){
    while(val > this.main.peek()){
      let tmp = this.main.pop();
      this.temp.push(tmp);
    }
    while(val < this.temp.peek()){
      let tmp = this.temp.pop();
      this.main.push(tmp)
    }
    this.main.push(val);
  }

  pop(){
    while(this.temp.size()){
      let tmp = this.temp.pop();
      this.main.push(tmp);
    }
    return this.main.pop();
  }
}

module.exports = SortStack;