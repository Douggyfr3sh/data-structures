

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check to see if the value at _storage[index] is undefined
  if (this._storage.get(index) === undefined) {
    //if undefined, create an array with 1 tuple in it [k,v]
    this._storage.set(index,[[k,v]]); //[  [[k,v], [k,v]] ,  []  ,  []     ]
  } else {
    //else, just push a tuple [k,v] to the existing array
    var isAdded = false;
    var bucket = this._storage.get(index);
    //iterate over the bucket to see if the key already exists
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = [k,v];
        isAdded = true;
      }
    }
    if (! isAdded) {
      bucket.push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a var to return
  var retVal;
  //Traverse through bucket searching for k
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        //When we find k, set retVal = the value
        retVal = bucket[i][1];
      }
    }
  }
  return retVal;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i);
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 //The complexity of all of the above functions is O(1)


