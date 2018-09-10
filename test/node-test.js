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

  //Also include default properties
  //And that it is an instance of a Node
  //And that 

})