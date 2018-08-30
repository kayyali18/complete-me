import Node from './Node';

export default class Trie {
  constructor () {
    this.totalWords = 0;
    this.root = new Node ();
  }

  count () {
    return this.totalWords;
  }

  insert (word) {
    let currNode = this.root;
    let lettersArr = [...word];

    this.insertRecursive (lettersArr, currNode, word);
    this.totalWords++;
  }

  insertRecursive (lettersArr, currNode, word) {
    if (!lettersArr.length) {
      currNode.end = true;
      currNode.word = word;
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
    let finalArr = [];

    while (completeMe.length) {
      if (currNode.children[completeMe[0]]) {
        currNode = currNode.children[completeMe.shift()];
      } else {
        return 'Sorry couldn\'t find what you were looking for';
      }
    }
    this.suggestRecursive (currNode, finalArr);

    return finalArr;    
  }

  suggestRecursive (currNode, finalArr) {
    //base case

    if (Object.keys(currNode.children).length > 1) {
      let keysArr = Object.keys(currNode.children);
      let checkpoint = currNode;

      keysArr.forEach (key => {
        currNode = checkpoint;
        currNode = currNode.children[key];
        this.suggestRecursive (currNode, finalArr);
      });
    } else {
      if (!currNode.end) {
        let key = Object.keys(currNode.children);

        currNode = currNode.children[key];
        // console.log(JSON.stringify(currNode, null, 4))
        this.suggestRecursive (currNode, finalArr);

      } else {
        finalArr.push (currNode.word);
        currNode.end = !currNode.end;
        let key = Object.keys(currNode.children);

        if (key.length >= 1) {
          this.suggestRecursive (currNode, finalArr);
        }
        currNode.end = !currNode.end;
        
      }
    }
  }

  populate (dictionary) {
    dictionary.forEach (word => {
      this.insert(word);
    });
  }
}