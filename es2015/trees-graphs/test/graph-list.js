let expect = require('expect');

let {Graph, Node} = require('../graph-class');
let {graphList} = require('../graph-list');

describe('Graph List', () => {
  let rootNode, nodes;

  beforeEach(() => {
    nodes = [0,1,2,3,4,5];
    nodes = nodes.map( val => {
      return new Node(val);
    });

    nodes[0].addEdge(nodes[1]);
    nodes[0].addEdge(nodes[2]);
    nodes[0].addEdge(nodes[3]);

    nodes[3].addEdge(nodes[4]);

    nodes[4].addEdge(nodes[5]);
    nodes[4].addEdge(nodes[3]);

    rootNode = nodes[0];
  });

  it('should return an array', () => {
    expect(graphList(rootNode)).toBeA('array');
  });

  it('should have three elements', () => {
    expect(graphList(rootNode).length).toEqual(4);
  });

  it('should have a linked list at each element', () => {
   let nodeList = graphList(rootNode);
   expect(nodeList[0]).toEqual(rootNode);
   expect(nodeList[1]).toEqual(nodes[3]);
   expect(nodeList[1].next).toEqual(nodes[2]);
   expect(nodeList[1].next.next).toEqual(nodes[1]);
   expect(nodeList[2]).toEqual(nodes[4]);
   expect(nodeList[2].next).toEqual(null);
   expect(nodeList[3]).toEqual(nodes[5]);
   expect(nodeList[3].next).toEqual(null);
  });

}); 