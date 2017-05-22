describe('doublyLinkedList: NEW tests', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have methods named "addToHead" and "removeTail"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should have a working addToHead method', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.next.next.value).to.equal(4);
    expect(doublyLinkedList.head.next.previous.value).to.equal(6);
    expect(doublyLinkedList.head.value).to.equal(6);
  });

});




