export class BinaryTree {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }

  isSubtree(node){
    if(!node){
      return false;
    }
    if(this.val === node.val){
      return this.checkSubtree(this, node);
    } else if (!this.left && !this.right){
      return false;
    } else {
      let left = null;
      let right = null;
      if(this.left){
        left = this.left.isSubtree(node);
      }
      if(this.right){
        right = this.right.isSubtree(node);
      }
      return !!(left || right);
    }
  }

  checkSubtree(node, target){
    if(node === null && target === null){
      return true;
    } else if(node === null || target === null){
      return false;
    } else if (node.val !== target.val) {
      return false; 
    } else {
      return this.checkSubtree(node.left, target.left) && this.checkSubtree(node.right, target.right);
    }
  }
}