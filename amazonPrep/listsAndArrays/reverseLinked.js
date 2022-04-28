class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

class Node {
  constructor(data = null) {
    this.value = data;
    this.next = null;
  }
}

let node1 = new Node(2)
let node2 = new Node(5)
node1.next = node2

let list = new LinkedList(node1)
console.log(list)

const reverse = (head) => {
    var previous = null
    let temp = null

    while(head != null){
        temp = head.next
        head.next = previous
        previous = head
        head = temp
    }
    return previous
};

console.log('hi', reverse(node1))