import Node from './Node';

export default class Trie {
  constructor () {
    this.totalWords = 0;
    this.root = new Node ();
  }

  insert (word) {
    let currNode = this.root;
    let lettersArr = [...word];
    this.insertRecursive (lettersArr, currNode, word);
    this.totalWords++

    
  }

  insertRecursive (lettersArr, currNode, word) {
    if (!lettersArr.length) {
      currNode.end = true;
      currNode.word = word
      return;
    }
    
    if (currNode.children[lettersArr[0]]) {
      currNode = currNode.children[lettersArr.shift()];
    } else {
      currNode.children[lettersArr[0]] = new Node ();
      currNode = currNode.children[lettersArr.shift()];
    }

    return this.insertRecursive (lettersArr, currNode, word);
  }

  suggest (input) {
    let completeMe = [...input];
    let currNode = this.root;

    while (completeMe.length) {
      if (currNode.children[completeMe[0]]) {
        currNode = currNode.children[completeMe.shift()];
      } else {
        return 'Sorry couldn\'t find what you were looking for';
      }
    }
    
    console.log (Object.keys(currNode.children))



  }
}



  // count() {
  //   return this.totalWords;
  // };

  // insert(word) {
  //   let currNode = this.root;
  //   let wordArray = [...word];
  //   this.insertRecursive (wordArray, currNode)
  //   this.totalWords++;
  // }

  // insertRecursive (wordArray, currNode) {
  //   if (wordArray.length < 1) {
  //     currNode.end = true;
  //     return;
  //   }

  //   if (currNode.children[wordArray[0]]) {
  //     currNode = currNode.children[wordArray.shift()];
  //   } else {
  //     let letter = wordArray[0]
  //     currNode.children[letter] = new Node ();
  //     currNode = currNode.children[letter];
  //     wordArray.shift ();
  //   }

  //   return this.insertRecursive (wordArray, currNode);
  // }
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

// }

