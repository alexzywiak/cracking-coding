export class BinarySearchTree {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.Model = BinarySearchTree;
  }

  add(val){
    if(val > this.val){
      if(this.right){
        this.right.add(val);
      } else {
        let node = new this.Model(val);
        node.parent = this;
        this.right = node;
      }
    } else {
      if(this.left){
        this.left.add(val);
      } else {
        let node = new this.Model(val);
        node.parent = this;
        this.left = node;
      }
    }
  }

  inOrderTraversal(func){
    if(this.left){
      this.left.inOrderTraversal(func);
    }
    func(this);
    if(this.right){
      this.right.inOrderTraversal(func);
    }
  }
}