var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  storage.items = {};

  storage.pop = stackMethods.pop;
  storage.push = stackMethods.push;
  storage.size = stackMethods.size;
  storage.cnt = 0;

  return storage;
};

var stackMethods = {
  push: function (value) {
    this.items[this.cnt] = value;
    this.cnt++;
  },

  pop: function () {
    //decrement count of items in stack
    var key;
    if (this.cnt > 0) {
      //Get a collection of keys from our stack
      var keys = Object.keys(this.items);
      //Determine which key to remove
      key = keys[this.cnt - 1];
      var retVal = this.items[key];
      delete this.items[this.cnt - 1];

      this.cnt--;
    }
    //If stack is empty, return undefined
    return retVal;
  },

  size: function() {
    return this.cnt;
  }
};









