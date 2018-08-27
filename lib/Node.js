export default class Node {
  constructor (letter, children = null) {
    this.letter = letter;
    this.end = false;
    this.children = children;
  }
}