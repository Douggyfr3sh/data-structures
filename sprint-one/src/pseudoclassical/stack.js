var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //this = Object.create(Stack.prototype); -- already there
  this.container = {};
  this.count = 0;

  //Return this; -- already there
};

Stack.prototype.size = function () {
  return this.count;
};

Stack.prototype.push = function (value) {
  this.container[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    //create variable to store return value
    var retVal = this.container[this.count - 1];
    //remove the value
    delete this.container[this.count - 1];
    //decrement count
    this.count --;
  }
  //Return the popped value
  return retVal;
};

