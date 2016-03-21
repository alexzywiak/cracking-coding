export const balancedTree = (tree) => {

  let isBalanced = (rootNode) => {
    
    if(!rootNode){
      return 0;
    }

    if(rootNode.left || rootNode.right){
      
      let left = isBalanced(rootNode.left);
      let right = isBalanced(rootNode.right);

      if(left === false || right === false || Math.abs(left - right) > 1){
        return false;
      } else {
        return Math.max(left, right) + 1;
      }
    } else {
      return 1;
    }
  };

  return isBalanced(tree) !== false;
};