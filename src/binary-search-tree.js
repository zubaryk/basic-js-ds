const { NotImplementedError } = require('../extensions/index.js');



/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  
    root = null;
  

  add(data) {
    this.root = addWithin(this.root, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

        if (node.data === data) {
          return node;
        }

        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
        return node;
    }
    
    
  }

  has(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      } 
      

      if (data < node.data) {
      return searchWithin(node.left, data); 
      } else {
       return searchWithin(node.right, data);
      }
      
    }
    }
  

  find(data) {
    return findNode(this.root, data);


    function findNode(node, data) {
     if (!node) {
      return null;
     }
     if (node.data == data) {
      return node.data;
     }

     if (data < node.data) {
      return findNode(node.left, data); 
      } else {
       return findNode(node.right, data);
      }

}
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null; 
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node; 
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }


  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while(node.right) {
      node = node.right;
    }
    return node.data;

  }
}


 







module.exports = {
  BinarySearchTree
};




