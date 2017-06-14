var Tree = function(value, parent) {
  var newTree = {};
  newTree.parent = parent === undefined ? null : parent;
  newTree.value = value;

  // your code here
  newTree.children = [];

  //Add a child node to this node
  newTree.addChild = treeMethods.addChild;

  //Traverse the tree, checking to see if it contains a given value
  newTree.contains = treeMethods.contains;

  //Disassoiate a node from it's parent, in both directions
  newTree.removeFromParent = treeMethods.removeFromParent;

  //Apply a callback to the value at every node
  newTree.traverse = treeMethods.traverse;

  //helper func to check if the node has children
  newTree.hasChild = treeMethods.hasChild;
  return newTree;
};

var treeMethods = {};

treeMethods.hasChild = function() {
  return (this.children.length > 0);
};

treeMethods.addChild = function(value) {
  var parent = this;
  this.children.push(Tree(value, parent));
};

treeMethods.contains = function(target) {

  var retVal = false;
  //define an inner recursive function
  var checkChild = function(node) {

    if (node.value === target) {
      retVal = true;
    }

    if (node.children.length > 0) {
      // iterate through children
      for (var i = 0; i < node.children.length; i++) {
        //recursive call for each child
        checkChild(node.children[i]);
      }
    }
  };

  checkChild(this);

  return retVal;
};

treeMethods.removeFromParent = function() {
  var filteredChildren = _.filter(this.parent.children, (child) => {
    return child !== this;
  });

  this.parent.children = filteredChildren;

  this.parent = null;
};

treeMethods.traverse = function(callback) {

  var applyFunc = (node) => {
    callback(node.value);
    if(node.hasChild()) {
      node.children.forEach((node, ind, collection) => {
        //traverse the tree, applying callback to each node.
        applyFunc(node);
      });
    }
  };

  applyFunc(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild : O(1) - if you have the index
//contains : O(n)
