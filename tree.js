/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() { // Breadth First Traversal
    // queue is the root
    const toVisitQueue = [this.root];
    // sum initialized at 0
    let sum = 0;
    // while something is in the queue
    while(toVisitQueue.length) {
      // remove the top element and hold in current
      const current = toVisitQueue.shift();
      // if the element is null, we are finished
      if(!current){
        return sum;
      }
      // otherwise, take the value of current and add to sum
      sum += current.val;
      // for each child of the current node
      for(let child of current.children) {
        // push into the queue
        toVisitQueue.push(child);
      }
    }
    // return the sum of all values
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {// Breadth First Traversal
    // queue is the root
    const toVisitQueue = [this.root];
    // sum initialized at 0
    let sum = 0;
    // while something is in the queue
    while(toVisitQueue.length) {
      // remove the top element and hold in current
      const current = toVisitQueue.shift();
      // if the element is null, we are finished
      if(!current){
        return sum;
      }
      // value of current node is even
      if(current.val % 2 === 0)
      // increment sum by 1
      sum += 1;
      // for each child of the current node
      for(let child of current.children) {
        // push into the queue
        toVisitQueue.push(child);
      }
    }
    // return the sum of all values
    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {// Depth First Traversal
    // queue is the root
    const toVisitStack = [this.root];
    // sum initialized at 0
    let sum = 0;
    // while something is in the queue
    while(toVisitStack.length) {
      // remove the top element and hold in current
      const current = toVisitStack.pop();
      // if the element is null, we are finished
      if(!current){
        return sum;
      }
      // value of current node is even
      if(current.val > lowerBound)
      // increment sum by 1
      sum += 1;
      // for each child of the current node
      for(let child of current.children) {
        // push into the queue
        toVisitStack.push(child);
      }
    }
    // return the sum of all values
    return sum;
  }
}

module.exports = { Tree, TreeNode };
