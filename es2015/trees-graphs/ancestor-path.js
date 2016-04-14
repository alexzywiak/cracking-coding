const {BinaryTree} = require('./bt-class');

export class AncestorTree extends BinaryTree {
  constructor(val){
    super(val);
  }

  commonAncestor(a, b){
    const pathA = this.ancestorPath(a).reverse();
    const pathB = this.ancestorPath(b).reverse();

    let p = 0;
    let ancestor = null;

    while(pathA[p] === pathB[p]){
      if(pathA[p] === a || pathB[p] === b){
        return ancestor;
      }
      ancestor = pathA[p++];
    }
    return ancestor;
  }

  ancestorPath(node){
    if(this === node){
      return [node];
    }

    let left = null,
        right = null;

    if(this.left){
      left = this.left.ancestorPath(node);
    }
    if(!left && this.right){
      right = this.right.ancestorPath(node);
    }

    if(left){
      return left.concat(this);
    }
    if(right){
      return right.concat(this);
    }
    if(!left && !right){
      return null;
    }
  }
}
