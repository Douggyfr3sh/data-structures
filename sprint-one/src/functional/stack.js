var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below.
  var retVal;

  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {

    if (counter > 0) {
      retVal = storage[counter - 1];
      delete storage[counter - 1];
      counter--;
    }

    return retVal;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
