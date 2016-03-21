let expect = require('expect');

let {Graph, Node} = require('../graph-class');
let {hasRouteDepth, hasRouteBreadth} = require('../node-search');

describe('Graph Class', () => {
  let graph, nodeList;

  beforeEach(() => {
    graph = new Graph();
    
    nodeList = [0,1,2,3,4,5].map(val => new Node(val));
    nodeList.forEach(node => graph.add(node));

    nodeList[0].addEdge(nodeList[1]);
    nodeList[1].addEdge(nodeList[2]);
    nodeList[2].addEdge(nodeList[3]);
    nodeList[3].addEdge(nodeList[4]);
    nodeList[4].addEdge(nodeList[0]);

  });

  it('should create a list of nodes', () => {
    expect(graph).toBeA(Graph);
    expect(nodeList[0]).toBeA(Node);
  });

  it('should return true for adjacent nodes', () => {
    expect(hasRouteDepth(nodeList[0], nodeList[1], graph)).toBe(true);
  });

  it('should return true for distant nodes', () => {
    expect(hasRouteDepth(nodeList[0], nodeList[3], graph)).toBe(true);
  });

  it('node should return false for unconnected nodes', () => {
    expect(hasRouteDepth(nodeList[0], nodeList[5], graph)).toBe(false);
  });

  it('should not get all cyclical', () => {
    expect(hasRouteDepth(nodeList[0], nodeList[4], graph)).toBe(true);
  });

  it('should return true for adjacent nodes', () => {
    expect(hasRouteBreadth(nodeList[0], nodeList[1], graph)).toBe(true);
  });

  it('should return true for distant nodes', () => {
    expect(hasRouteBreadth(nodeList[0], nodeList[3], graph)).toBe(true);
  });

  it('node should return false for unconnected nodes', () => {
    expect(hasRouteBreadth(nodeList[0], nodeList[5], graph)).toBe(false);
  });

  it('should not get all cyclical', () => {
    expect(hasRouteBreadth(nodeList[0], nodeList[4], graph)).toBe(true);
  });
}); 