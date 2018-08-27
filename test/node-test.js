import { expect } from 'chai';
// const { assert } = require('chai');

import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach( () => {
    node = new Node('pizza');
  })

  it('should exist right now', () => {
    expect(node).to.exist;
  })

  it('should default children to null', () => {
    expect(node.children).to.equal(null);
  })

  it('should take a word as an argument and assign the first letter to the letter property of this obj', () => {
    expect(node.letter).to.equal('p');
  })
})