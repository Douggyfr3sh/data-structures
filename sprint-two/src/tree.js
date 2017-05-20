var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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


/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild : O(1) - if you have the index
//contains : O(n)
