var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var collectionObj = Object.create(stackMethods);
  collectionObj.count = 0;
  collectionObj.container = {};

  return collectionObj;
};

var stackMethods = {

  size: function () {
    return this.count;
  },

  push: function (value) {
    this.container[this.count] = value;
    this.count++;
  },

  pop: function () {
    //condition of the count is greater than zero
      if (this.count > 0) {
        //create a variable to hold the return value
        var retVal = this.container[this.count - 1];
        //remove the value of the container
        delete this.container[this.count - 1];
        //decrease the counter
        this.count--;
      }

      return retVal;
  }

};


