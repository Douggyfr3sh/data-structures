var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  list.createNode = function(value) {
    var node = {};

    node.value = value;
    node.next = null;
    node.previous = null;

    return node;
  };

  list.addToTail = function(value) {
    var node = list.createNode(value);

    //IF there is more than one item, we need to move
    //the pointer of the previous tail to point to the new tail
    if (list.count > 0) {
      list.tail.next = node;
    }

    list.tail = node;
    //If this is the first node, point head to it
    if (list.count === 0) {
      list.head = list.tail;
    }

    //Increment the count
    list.count++;
  };

  list.removeTail = function() {
    //check if there are any nodes in the LL
    if (list.count > 0) {
      //if there are >1 items in LL
      if (list.count > 1) {
        //set tail.previous.next = null
        list.tail.previous.next = null;
      } else {
        //If only one node in list, also seat head = null
        list.head = null;
      }
      //set tail = null
      list.tail = null;
      //decrement count
      list.count--;
    }
  };

  list.addToHead = function(value) {
    //create a node by passing value to list.createNode
    var node = list.createNode(value);
    //Special case- first object in the LL
    if (list.count === 0) {
      //point both head and tail to node
      list.head = node;
      list.tail = node;
    } else { //not first item in LL
      //set node.next to equal current head
      node.next = list.head;
      //set head.previous to equal node
      list.head.previous = node;
      //set head to equal current node
      list.head = node;
    }
    //Increment counter
    list.count++;
  };

  list.removeHead = function() {
    //Removes first node from the list
    //First, check if there are any items in the list
    var retVal;
    if (list.head !== null) {
      //If there is only one, simply point head and tail to null
      retVal = list.head;
      if (list.count === 1) {
        list.head = null;
        list.tail = null;
        list.count--;
      } else {
        //More than one item in the list
        //Point head to next node
        list.head = list.head.next;
        list.count--;
      }
    }

    return retVal.value;

  };

  list.contains = function(target) {
    var retVal = false;
    var recursiveContains = function (node) {
      if (node.value === target) {
        retVal = true;
      }
      if (node.next !== null) {
        recursiveContains(node.next);
      }

      return retVal;
    };

    return recursiveContains(list.head);

  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 //Time Complexity for removeHead and addToTail are constant time compexity O(1)

 //Time Complexity for contains is linear since we need to iterate over the list to find target. O(n)
