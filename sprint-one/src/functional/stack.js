var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keys = Object.keys(storage);
  // Implement the methods below
  someInstance.push = function(value) {
    storage[0] = value;
  };

  someInstance.pop = function() {

    delete storage[keys[keys.length-1]];
  };

  someInstance.size = function() {

  };

  return someInstance;
};
