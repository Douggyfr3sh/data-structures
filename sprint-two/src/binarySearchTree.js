var BinarySearchTree = function(value) {

  this.left = null;
  this.right = null;
  this.value = value;

};

BinarySearchTree.prototype.insert = function(value) {
  //checks if node contains any value

  if (value < this.value) { //less
     //check if left is null
    if (this.left === null) {
      //assign value to left
      this.left = new BinarySearchTree(value);
    } else { //not null
      //recursive insert on left

      this.left.insert(value);
    }
  } else if (value > this.value) { //right
    //check if right is null
    if (this.right === null ) {
      //assign value to right
      this.right = new BinarySearchTree(value);
    } else { //not null
      //recursive insert on right
      this.right.insert(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value) {
  var retVal = false;
  //recursive function
  var checkNodes = function (node) {
    //check if value equals to node value
    //if yes
    if (node.value === value) {
      //set variable to true and return
      retVal = true;
    } else { //if not
      //is this value less than node
        //if less
      if (value < node.value) {
          //recursive call contains on this.left
        if (node.left !== null) {
          checkNodes(node.left);
        }
      } else {
        //if greater
          //recursive call on right
        if (node.right !== null) {
          checkNodes(node.right);
        }
      }
    }
    return retVal;
  };

  //return recursive function
  return checkNodes(this); //5

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var applyToNodes = function(node) {
    cb(node.value);

    if (node.left !== null) {
      applyToNodes(node.left);
    }

    if (node.right !== null) {
      applyToNodes(node.right);
    }
  };

  applyToNodes(this);

};

/*
 * Complexity: What is the time complexity of the above functions?

   insert and contains - O(log n) - logarithmic time complexity
   depthFirstLog - O(n) - linear


 */
