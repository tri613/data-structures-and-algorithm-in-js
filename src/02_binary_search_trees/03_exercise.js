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

  breadthFirstTraversal(cb) {
    let queue = [this];
    while (queue.length) {
      let node = queue.shift();
      cb(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  getMaxValue() {
    let currentNode = this;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  getMinValue() {
    // let currentNode = this;
    // while (currentNode.left) {
    //   currentNode = currentNode.left;
    // }
    // return currentNode.value;

    if (this.left) {
      return this.left.getMinValue();
    } 
    return this.value;
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

console.log('max', root.getMaxValue());
console.log('min', root.getMinValue());
