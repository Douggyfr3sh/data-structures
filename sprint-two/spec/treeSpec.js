describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should work with negative numbers', function() {
    tree.addChild(5);
    tree.addChild(-5);
    expect(tree.children[1].value).to.equal(-5);
  });

});

describe('student created: tree- advanced content: added a parent link to all nodes', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have a property link to it\'s parent', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.children[1].addChild(3);
    console.log(tree);
    expect(tree.children[1].children[0].parent.value).to.equal(2);
  });

  it('should disassociate a child tree from it\'s parent', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.children[1].addChild(3);
    console.log(tree);
    expect(tree.children[1].children[0].parent.value).to.equal(2);
    var subtree = tree.children[1].children[0];
    tree.children[1].children[0].removeFromParent();
    expect(tree.children[1].children.length).to.equal(0);
    expect(subtree.parent).to.equal(null);
  });
});

describe('student created: tree- advanced content: added a traverse method', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should apply callback to all nodes in the tree', () => {
    var maple = {
      root: 1,
      branch1: 2,
      branch2: 3,
      leaf1: 4,
      leaf2: 5
    };

    var exponentialArr = [1,2 * 2,3 * 3,4 * 4,5 * 5];
    var resultsArr = [];

    var cb = (node) => {
      var exponent = node.value *node.value;
      resultsArr.push[exponent];
    };

    tree.value = maple.root;
    tree.addChild(maple.branch1);
    tree.addChild(maple.branch2);
    tree.children[0].addChild(maple.leaf1);
    tree.children[1].addChild(maple.leaf2);

    tree.traverse(cb);

    resultsArr.forEach( (val,ind,arr) => {
      expect(val).to.equal(exponentialArr[ind]);
    });




    console.log('tree in new test ', tree);
  });
});

