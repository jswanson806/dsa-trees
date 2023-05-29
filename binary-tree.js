/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // create queue and add root node
    const toVisitQueue = [this.root];
    // initialize depth to 0
    let depth = 0;
    // while the queue is not empty
    while(toVisitQueue.length) {
      // remove the first node of the queue
      const current = toVisitQueue.shift();
      // base case
      if(!current){
        return depth;
      }
      // increment depth 
      depth++;
      // if the node has no children, return depth
      if(current.left === null && current.right === null){
        return depth;
      } 
      // if the node has a left child, add them to the queue
      if(current.left !== null) {
        toVisitQueue.push(current.left)
        // if the node has a right child, add them to the queue
      }
      
      if(current.right !== null) {
        toVisitQueue.push(current.right)
      }
    }
    
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // create queue and add root node
    const toVisitQueue = [this.root];
    // initialize depth to 0
    let rightDepth = 1;
    let leftDepth = 1;
    // while the queue is not empty
    while(toVisitQueue.length) {
      // remove the first node of the queue
      const current = toVisitQueue.shift();
      
      // base case
      if(!current){ // queue is empty
        return 0;
      }
      
      // if the node has a left child, add them to the queue
      if(current.left !== null) {
        // increment size of leftDepth
        leftDepth++;
        toVisitQueue.push(current.left)
      }

      // if the node has a right child, add them to the queue
      if(current.right !== null) {
        // increment size of rightDepth
        rightDepth++;
        toVisitQueue.push(current.right)
      }
    }
    
    return Math.max(rightDepth, leftDepth);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    // handle empty tree
    if(!this.root){
      return 0;
    }
    // set res to array containing the value of this.root 
    const res = [this.root.val]; // modifiable from recursive function
    // return max path sum without splitting
    function depthFirstSearch(root){
      if (!root) return 0;
      // call function recursively on left and right side
      let leftMax = depthFirstSearch(root.left); // 0
      let rightMax = depthFirstSearch(root.right); // 5

      // if return value is negative, set to 0
      leftMax = Math.max(leftMax, 0) 
      rightMax = Math.max(rightMax, 0) 

      // compute max path sum WITH split
      res[0] = Math.max(res[0], root.val + leftMax + rightMax) 
      // return the root value + max path val (max of left and right)
      return root.val + Math.max(leftMax, rightMax)
    }
    // call helper recursion function on root node
    depthFirstSearch(this.root)
    // return value of res
    return res[0]
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // handle empty tree
    if(!this.root){
      return null;
    }

    // array to hold unique values from tree
    const uniqueVals = [];

    function depthFirstSearch(root) {
      // base case
      if(!root) return;
      // normal case
      // add value of current node to unique value list
      uniqueVals.push(root.val)
      // call resursively on left side
      depthFirstSearch(root.left)
      // call recurisvely on right side
      depthFirstSearch(root.right)
    }

    // call recursion helper function with this.root
    depthFirstSearch(this.root);
    // set res to root value
    let res = this.root.val

    for(let val of uniqueVals){
      if(lowerBound < val && val < res){
        res = val;
      }
    }
    // lowerBound and res match, no such value -> return null
    return res === lowerBound? null : res;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
