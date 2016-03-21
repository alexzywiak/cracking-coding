export class Graph {
  constructor(){
    this.nodeList = [];
  }

  add(node){
    this.nodeList.push(node);
  }

  remove(node){
    let i = this.nodeList.indexOf(node);
    this.nodeList.splice(i, 1);
    return node;
  }

  getNodes(cb){
    this.nodeList.forEach(cb);
  }
}

export class Node {
  constructor(val){
    this.val = val;
    this.edges = [];
  }

  addEdge(node){
    this.edges.push(node);
  }

  removeEdge(node){
    let i = this.edges.indexOf(node);
    this.edges.splice(i, 1);
    return node;
  }

  hasEdge(node){
    return this.edges.indexOf(node);
  }
}