export class BST {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export const minTree = (list, start, end) => {

  start = (start) ? start : 0;
  end = (end !== undefined) ? end : list.length - 1;

  let mid = Math.ceil((end - start) / 2) + start;
  let tree = new BST(list[mid]);

  if(mid > start){
    tree.left = minTree(list, start, mid - 1);
  }
  if(mid < end){
    tree.right = minTree(list, mid + 1, end);
  }
  return tree;
};