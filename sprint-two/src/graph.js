

// Instantiate a new graph
var Graph = function() {
  //this = Object.create(Graph.prototype) -- already there
  this.container = {}; // { 8: [ ] }  --> { 8: [edge,edge,edge]}
  //return this; -- already there         { 5: [4]}
                                        //{ 4: [[5, 8]}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //Add a node to the container.
  //A node is stored as an array with 2 elements
  //The second element is an inner array which stores edges
  this.container[node] = []; //the value is an empty array which
                              //will store edge values.
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check if node exists in Graph.container
  return this.container[node] === undefined ? false : true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeList = this.container[node];

  for (var i = 0; i < edgeList.length; i++) {
    this.container[edgeList[i]].splice(this.container[edgeList[i]].indexOf(node));
  }

  delete this.container[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this.container[fromNode].includes(toNode) ? true : false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if container has fromNode && toNode
  if (this.container[fromNode] && this.container[toNode]) {
    //check to see if edge does not exist
    if (!this.container[fromNode].includes(toNode)) {
      this.container[fromNode].push(toNode);
    }

    if (!this.container[toNode].includes(fromNode)) {
      this.container[toNode].push(fromNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //check if fromNode contains toNode
  if (this.container[fromNode].includes(toNode)) {
    this.container[fromNode].splice(this.container[fromNode].indexOf(toNode)); //return  5: [3,8,7]
  }
  //check if toNode contains edge fromNode
  if (this.container[toNode].includes(fromNode)) {
    this.container[toNode].splice(this.container[toNode].indexOf(fromNode));
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.container) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


