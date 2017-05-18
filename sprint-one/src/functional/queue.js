var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var cnt = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[cnt] = value; //0 is first value index
    cnt++;
  };

  someInstance.dequeue = function() {
    //Check if there is a value at index 0
    if (storage[0] !== undefined) {
      var retVal = storage[0];

      var keys = Object.keys(storage);
      //remove the first item (index 0)
      delete storage[0];
      //shift items in storage down by 1 (for loop)
      for (var i = 0; i < cnt - 1; i++) {
        storage[i] = storage[i + 1];
      }

      delete storage[cnt];
      cnt--;
      return retVal;
    }


  };

  someInstance.size = function() {
    return cnt;
  };

  return someInstance;
};
