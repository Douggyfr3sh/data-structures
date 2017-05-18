var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var collection = Object.create(queueMethods);
  collection.counter = 0;
  collection.container = {};

  return collection;

};

var queueMethods = {

  size : function() {
    return this.counter;
  },

  enqueue : function(value) {
    this.container[this.counter] = value;
    this.counter++;
  },

  dequeue : function() {

    if (this.counter > 0) {
      var retVal = this.container[0];
      //return the deleted value
      //delete first item
      delete this.container[0];

      //shift all the items
      //for loop
      for (var i = 0; i < this.counter - 1; i++) {
        this.container[i] = this.container[i + 1];
      }

      delete this.container[this.counter];

      this.counter--;
    }

    return retVal;

  }

};