import Node from './Node';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = new Node();
  };

  count(node = this.root) {
    return this.totalWords;
  };

  populate(arr = dictionary) {
    arr.forEach( word => {
      this.insert(word); 
    });
  };

  insert(word = '', node = this.root) {
    if (word.length == 0) {
      if (!node.end) {
        this.totalWords++;
        node.end = true;
      }
      return; 
    } else if (!node[word[0]]) {
      node[word[0]] = new Node();
      return this.insert(word.slice(1), node[word[0]])
    } else {
      return this.insert(word.slice(1), node[word[0]])
    }
  };

  displayWords(node = this.root) {
    let allWords = this.getWords(node, '');
    return allWords.filter( word => word != '');
  };

  suggest(entry = '') {
    let splitEntry = entry.split('');
    let path = splitEntry.reduce( (key, letter) => {
      return key[letter];
    }, this.root);

    if (this.root[entry[0]]) {
      return this.getWords(path, entry);
    } else {
      return "no words";
    }
  };
  
  getWords(obj, entry) {
    let results = [];
    let arr = Object.keys(obj);

    arr.forEach( key => {
      if (key !== 'end') {
        results.push(...this.getWords(obj[key], entry + key));
      } else if (obj.end) {
        results.push(entry);
      }
    })    
    return results;
  };
//closes the entire Class
};