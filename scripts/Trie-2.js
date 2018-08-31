class Trie {
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
                return 'error';
            }
        }

        this.suggestRecursive (currNode, finalArr);

        return finalArr;
    }
}