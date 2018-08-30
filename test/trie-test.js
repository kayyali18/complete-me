import { expect } from 'chai';

import fs from 'fs';
import Trie from '../scripts/Trie'
import Node from '../scripts/Node'

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');



describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  });

  it('should set its default root to empty object', () => {
    expect(trie.root.children).to.deep.eq({});
  });

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.totalWords).to.eq(0);
    trie.insert('poop')
    expect(trie.totalWords).to.eq(1)
  });

  it ('should insert word correctly when calling insert', () => {
    trie.insert ('hey');
    trie.insert ('cool');
    trie.insert ('popeye');
    console.log(JSON.stringify(trie, null, 4))
    expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'p' ])
  })

  it ('should return an array of all possible suggestions', () => {
    trie.insert ('hellen');
    trie.insert ('hello');
    trie.insert ('hellocopter');
    trie.insert ('hey');
    trie.insert ('hi');

    expect (trie.suggest ('he')).to.deep.equal(['hellen', 'hello', 'hellocopter', 'hey'])
    expect (trie.suggest ('he')).to.deep.equal(['hellen', 'hello', 'hellocopter', 'hey'])
  })

  it ('should populate when passing in the dictionary', () => {
    expect (trie.count()).to.eq(0);
    trie.populate(dictionary);
    expect (trie.count()).to.eq(235886);
    // console.log(JSON.stringify(trie, null, 4)) 

  })
});