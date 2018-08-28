import Node from './Node';

export default class Trie {
  constructor () {
    this.totalWords = 0;
    this.root = null;
  }

  count() {
    return this.totalWords;
  };

  insert(Word) {
    this.totalWords++;
  };

  // push(data) {
  //   this.length++;

  //   // if we do not have a value at this.head, create one
  //   if (!this.head) {
  //     this.head = new Node(data);

  //   // if this.head has an object, find last node in our list starting at this.head
  //   } else {
  //     let currNode = this.head;

  //     while (currNode.next) {
  //       currNode = currNode.next;
  //     }

  //     currNode.next = new Node(data);
  //   }
  // }

  // pop() {
  //   // if (this.length === 0) {
  //   let currNode = this.head;
  //   let prevNode;

  //   if (!this.head) {
  //     return null;
  //   }

  //   while(currNode.next) {
  //     prevNode = currNode;
  //     currNode = currNode.next;
  //   }

  //   if (this.length === 1) {
  //     this.head = null;

  //   } else {
  //     prevNode.next = null;
  //   }
    
  //   this.length--;

  //   return currNode;
  // }

  // find(data) {
  //   let foundNode = null;
  //   let currNode = this.head;

  //   while (currNode) {
  //     if (currNode.data === data) {
  //       foundNode = currNode;
  //       break;
  //     } else {
  //       currNode = currNode.next;
  //     }
  //   }
  //   return foundNode;
  // }

}

