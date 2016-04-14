// function BinaryHeap () {
//   this._heap = [];
//   // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
//   this._compare = function (i, j) { return i < j };
// }
// BinaryHeap.prototype.swap = functiion(i, j){
//   var temp = this._heap[i];
//   this._heap[i] = this._heap[j];
//   this._heap[j] = temp;
// }
// // This function works just fine and shouldn't be modified
// BinaryHeap.prototype.getRoot = function () {
//   return this._heap[0];
// }
// BinaryHeap.prototype.insert = function (value) {
//   var idx = this._heap.length;
//   var parentIdx = Math.floor(idx/2);
//   this._heap.push(value);
  
//   while(idx > 0 && this._heap[idx] < this._heap[parentIdx]){
//     this.swap(idx, parentIdx);
//     idx = parentIdx;
//     parentIdx = Math.floor(idx / 2);
//   }
// }
// BinaryHeap.prototype.removeRoot = function () {
//   // TODO: Your code here
// }

// module.exports = BinaryHeap;