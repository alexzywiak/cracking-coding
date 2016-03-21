let expect = require('expect');

let {Graph, Node} = require('../graph-class');

describe('Graph Class', () => {
  let graph, node;

  beforeEach(() => {
    graph = new Graph();
    node  = new Node(0);
    graph.add(node);
  });

  it('graph should exist', () => {
    expect(graph).toExist();
    expect(graph).toBeA(Graph);
  });

  it('node should exist', () => {
    expect(graph).toExist();
    expect(graph).toBeA(Graph);
  });

  it('node should be added to graph', () => {
    expect(graph.nodeList.indexOf(node)).toEqual(0);
  });

  it('should run a function on each node in the graph', () => {
    let node1 = new Node(1);
    graph.add(node1);
    let tracker = [];
    graph.getNodes(node => tracker.push(node.val));
    expect(tracker).toEqual([0,1]);
  });

  it('should add an edge to a node', () => {
    let node1 = new Node(1);
    graph.add(node1);
    node.addEdge(node1);
    expect(node.hasEdge(node1)).toEqual(0);
  });
}); 