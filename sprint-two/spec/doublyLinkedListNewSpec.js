describe('doublyLinkedList: NEW tests', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  //this test is from linkedList - use as a guide to write new tests
  it('should have methods named "addToHead" and "removeTail"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

});




