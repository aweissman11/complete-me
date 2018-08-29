import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach( () => {
    node = new Node();
  });

  it('should exist', () => {
    expect(node).to.exist;
  });

})