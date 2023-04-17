const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  } 

  root() {
    return this.rootOfTree;
  }

  add(data) {

    this.rootOfTree = addElement(this.rootOfTree, data);

    function addElement(node, data) {
      if (!node) return new Node(data);
      if (node.data === data)  return node;
      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchElement(this.rootOfTree, data);

    function searchElement(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return searchElement(node.left, data);
      } else {
        return searchElement(node.right, data);
      }
    }
  }

  find(data) {
    return findElement(this.rootOfTree, data);

    function findElement(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (data > node.data) {
        return findElement(node.right, data);
      } else {
        return findElement(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootOfTree = removeElement(this.rootOfTree, data);

    function removeElement(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeElement(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootOfTree) return null;
    
    let minNode = this.rootOfTree;
    while(minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if (!this.rootOfTree) return null;
    
    let maxNode = this.rootOfTree;
    while(maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
