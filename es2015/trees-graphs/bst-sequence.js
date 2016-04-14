import {BinarySearchTree} from './bst-class';

export class BinarySearchTreeSequence extends BinarySearchTree {
  constructor(val){
    super(val);
    this.Model = BinarySearchTreeSequence;
  }

  getSequence(){
    let left = [[]];
    let right = [[]];

    if(this.left){
      left = this.left.getSequence();
    }

    if(this.right){
      right = this.right.getSequence();
    }

    return this.weaveLists(left, right, this.val);
  }

  weave(a, b, prefix){
    let results = [];

    const sub = (pointerA = 0, pointerB = 0, combos = [prefix]) => {

      // Neither array is finished
      if(pointerA < a.length && pointerB < b.length){
        sub(pointerA + 1, pointerB, combos.slice().concat(a[pointerA]));
        sub(pointerA, pointerB + 1, combos.slice().concat(b[pointerB]));
      // A is finished, add the rest of B
      } else if(pointerA === a.length){
      combos = combos.concat(b.slice(pointerB));
      results.push(combos);
        // B is finished, add the rest of A
      } else {
        combos = combos.concat(a.slice(pointerA));
        results.push(combos);
      }
    }

    sub();
    return results;
  }

  weaveLists(a, b, prefix){
    let results = [];
    a.forEach( listA => {
      b.forEach( listB => {
        results = results.concat(this.weave(listA, listB, prefix));
      });
    });
    return results;
  }
}