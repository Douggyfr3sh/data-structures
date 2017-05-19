var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.container = {};

};

Queue.prototype.size = function(){
  return this.counter;
};

Queue.prototype.enqueue = function(value){
  this.container[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function(){
  //looks for condition that index 0 has property
  if (this.counter > 0) {
    //create a return value
    var retVal = this.container[0];
    //delete the value at 0
    delete this.container[0];
    //loop to shift everything else down
    for (var i = 0; i < this.counter - 1; i++){
      //set this.container
      this.container[i] = this.container[i + 1];
    }

    this.counter--;

    return retVal;
  }
};