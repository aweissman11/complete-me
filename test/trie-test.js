import { expect } from 'chai';
import Trie from '../lib/trie';


describe('TRIE', () => {
  let prefixTrie;

  beforeEach( () => {
    prefixTrie = new Trie();
  });

  it('should exist', () => {
    expect(prefixTrie).to.exist;
  });

  it('should default totalWords to zero', () => {
    expect(prefixTrie.totalWords).to.equal(0);
  });

  it('should display all the words that have been entered', () => {
    prefixTrie.insert('shiggitybop')
    prefixTrie.insert('hello');
    prefixTrie.insert('helicopter');
    prefixTrie.insert('graham');
    prefixTrie.insert('greg');
    prefixTrie.insert('grain');

    // console.log(JSON.stringify(prefixTrie.root, null, 2));
    expect(prefixTrie.displayWords()).to.deep.equal([ 'shiggitybop', 'hello', 'helicopter', 'graham', 'grain', 'greg' ]);

  });

  it('should not insert a word if nothing is entered', () => {
    prefixTrie.insert();
    prefixTrie.insert();
    expect(prefixTrie.displayWords()).to.deep.equal([]);
    prefixTrie.insert('test');
    expect(prefixTrie.displayWords()).to.deep.equal([ 'test' ]);
    prefixTrie.insert();
    expect(prefixTrie.displayWords()).to.deep.equal([ 'test' ]);

  })  

  it('should suggest words', () => {
    prefixTrie.insert('shiggitybop')
    prefixTrie.insert('hello');
    prefixTrie.insert('helicopter');
    prefixTrie.insert('graham');
    prefixTrie.insert('greg');
    prefixTrie.insert('grain');

    expect(prefixTrie.suggest('hel')).to.deep.equal(['hello', 'helicopter']);
    expect(prefixTrie.suggest('gr')).to.deep.equal(['graham', 'grain', 'greg']);
    expect(prefixTrie.suggest('x')).to.deep.equal("no words");
    expect(prefixTrie.suggest()).to.deep.equal("no words");


  })

  it('should count words', () => {
    prefixTrie.insert('dude');
    prefixTrie.insert('dude');
    prefixTrie.insert('shiggitybop')
    prefixTrie.insert('hello');
    prefixTrie.insert('helicopter');
    prefixTrie.insert('graham');
    prefixTrie.insert('greg');
    prefixTrie.insert('grain');
    prefixTrie.insert('dudette');
    prefixTrie.insert('exactly');

    expect(prefixTrie.count()).to.equal(9);
  })

  it('should populate the whole dictionary when populate is called', () => {
    prefixTrie.populate();
    expect(prefixTrie.count()).to.equal(235886);
  })

});