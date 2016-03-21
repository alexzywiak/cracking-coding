export const graphList = (rootNode) => {
  let index = 1;
  let list = [rootNode];
  let currentNode = rootNode;
  rootNode.visited = true;
  rootNode.next = null;

  while(currentNode){
    
    currentNode.edges.forEach(edge => {
      if(!edge.visited){
        edge.visited = true;
        edge.next = null;
        if(list[index]){
          edge.next = list[index];
        }
        list[index] = edge;
      }
    });

    if(currentNode.next){
      currentNode = currentNode.next;
    } else {
      if(list[index]){
        currentNode = list[index++];
      } else {
        currentNode = false;
      }
    }
  }

  return list;
};