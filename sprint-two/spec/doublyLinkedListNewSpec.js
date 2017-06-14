describe('student created: advanced content doublyLinkedList: NEW tests', function() {
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

  it('should have a working removeTail method', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.removeTail().value).to.equal(4);
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.head.next).to.equal(null);
  });

  //These tests check that we refactored addToTail and removeHead
  //to work with the new doubly linked list

  it('should have refactored addToTail to work with doublyLinkedList', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.head.next.previous.value).to.equal(4);
    expect(doublyLinkedList.head.next.next.previous.value).to.equal(5);
    expect(doublyLinkedList.head.previous).to.equal(null);

  });

  it('should have refactored removeHead to work with doublyLinkedList', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.previous).to.equal(null);
  });

});




