export const next = (node) => {
  
  if(node === null){
    return null;
  }

  if(node.right){
    let currentNode = node.right;
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode;
  } else {
    let currentNode = node;
    let parent = currentNode.parent;

    while(parent && parent.left !== currentNode){
      currentNode = parent;
      parent = currentNode.parent;
    }
    return parent;
  }
};