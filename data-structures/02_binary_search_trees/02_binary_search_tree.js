/* 
Binary search tree:
- Searching is fast: O(log n)
- Most performant when the tree is balanced
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    } 

    if (this.left && value <= this.value) {
      return this.left.contains(value);
    }

    if (this.right && value > this.value) {
      return this.right.contains(value);
    }

    return false;
  }

  depthFirstTraversal(cb, order = "in-order") {
    if (order == "pre-order") cb(this.value);

    if (this.left) {
      this.left.depthFirstTraversal(cb, order);
    }
    
    if (order == "in-order") cb(this.value);

    if (this.right) {
      this.right.depthFirstTraversal(cb, order);
    }

    if (order == "post-order") cb(this.value);
  }

  breadthFirstTraversal(cb) {
    let queue = [this];
    while (queue.length) {
      let treeNode = queue.shift();
      cb(treeNode.value);
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }
}

let root = new BST(50);
root.insert(30);
root.insert(70);
root.insert(100);
root.insert(20);
root.insert(60);
root.insert(59);
root.insert(85);
root.insert(105);
root.insert(10);
root.insert(45);
root.insert(35);

console.log(50, root.contains(50));
console.log(613, root.contains(613));

root.breadthFirstTraversal(console.log)