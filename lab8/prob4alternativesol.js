// Constructor function implementation of LinkedList
function MyLinkedList() {
    this.head = null;
  
    this.add = function (value) {
      const newNode = {
        value: value,
        next: null,
      };
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    };
  
    this.remove = function (value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      }
    };
  
    this.print = function () {
      if (!this.head) {
        console.log("LinkedList{}");
        return;
      }
  
      let currentNode = this.head;
      let output = "LinkedList{";
      while (currentNode) {
        output += currentNode.value;
        if (currentNode.next) {
          output += ",";
        }
        currentNode = currentNode.next;
      }
      output += "}";
      console.log(output);
    };
  }
  
  // Usage
  let linkedlist = new MyLinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  linkedlist.print(); // Expected Result: LinkedList{1,2,3}
  linkedlist.remove(2);
  linkedlist.print(); // Expected Result: LinkedList{1,3}
  