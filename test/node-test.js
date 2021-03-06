import { expect } from 'chai';
import Node from '../scripts/node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('should exist', () => {
    expect(node).to.exist;
  });

  // it ('should be an instance of a node', () {

  // })

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  });

  it('should default children to an empty object', () => {
    expect(node.children).to.deep.equal({});
  });
});