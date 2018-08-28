import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach( () => {
    node = new Node('p');
  });

  it('should exist', () => {
    expect(node).to.exist;
  });

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  });

})