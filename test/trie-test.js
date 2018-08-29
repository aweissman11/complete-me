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

  }); 

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


  });

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
  });

  it('should populate the whole dictionary when populate is called', () => {
    prefixTrie.populate();
    expect(prefixTrie.count()).to.equal(235886);
  });

  it('should suggest words from the entire dictionary', () => {
    prefixTrie.populate();
    // console.log(JSON.stringify(prefixTrie.suggest('hel'), null, 2));
    
    expect(prefixTrie.suggest('hel')).to.deep.equal(
      [
        "helbeh",
        "helcoid",
        "helcology",
        "helcoplasty",
        "helcosis",
        "helcotic",
        "heldentenor",
        "helder",
        "hele",
        "helenin",
        "helenioid",
        "helepole",
        "heliacal",
        "heliacally",
        "heliaean",
        "helianthaceous",
        "helianthic",
        "helianthin",
        "heliast",
        "heliastic",
        "heliazophyte",
        "helical",
        "helically",
        "heliced",
        "helices",
        "helichryse",
        "helichrysum",
        "heliciform",
        "helicin",
        "helicine",
        "helicitic",
        "helicline",
        "helicograph",
        "helicogyrate",
        "helicogyre",
        "helicoid",
        "helicoidal",
        "helicoidally",
        "helicometry",
        "helicon",
        "heliconist",
        "helicoprotein",
        "helicopter",
        "helicorubin",
        "helicotrema",
        "helictite",
        "helide",
        "heling",
        "helio",
        "heliocentric",
        "heliocentrical",
        "heliocentrically",
        "heliocentricism",
        "heliocentricity",
        "heliochrome",
        "heliochromic",
        "heliochromoscope",
        "heliochromotype",
        "heliochromy",
        "helioculture",
        "heliodon",
        "heliodor",
        "helioelectric",
        "helioengraving",
        "heliofugal",
        "heliogram",
        "heliograph",
        "heliographer",
        "heliographic",
        "heliographical",
        "heliographically",
        "heliography",
        "heliogravure",
        "helioid",
        "heliolater",
        "heliolatrous",
        "heliolatry",
        "heliolite",
        "heliolithic",
        "heliologist",
        "heliology",
        "heliometer",
        "heliometric",
        "heliometrical",
        "heliometrically",
        "heliometry",
        "heliomicrometer",
        "heliophilia",
        "heliophiliac",
        "heliophilous",
        "heliophobe",
        "heliophobia",
        "heliophobic",
        "heliophobous",
        "heliophotography",
        "heliophyllite",
        "heliophyte",
        "heliopticon",
        "helioscope",
        "helioscopic",
        "helioscopy",
        "heliosis",
        "heliostat",
        "heliostatic",
        "heliotactic",
        "heliotaxis",
        "heliotherapy",
        "heliothermometer",
        "heliotrope",
        "heliotroper",
        "heliotropian",
        "heliotropic",
        "heliotropical",
        "heliotropically",
        "heliotropine",
        "heliotropism",
        "heliotropy",
        "heliotype",
        "heliotypic",
        "heliotypically",
        "heliotypography",
        "heliotypy",
        "heliozoan",
        "heliozoic",
        "heliport",
        "helispheric",
        "helispherical",
        "helium",
        "helix",
        "helizitic",
        "hell",
        "hellandite",
        "hellanodic",
        "hellbender",
        "hellborn",
        "hellbox",
        "hellbred",
        "hellbroth",
        "hellcat",
        "helldog",
        "helleboraceous",
        "helleboraster",
        "hellebore",
        "helleborein",
        "helleboric",
        "helleborin",
        "helleborism",
        "heller",
        "helleri",
        "hellgrammite",
        "hellhag",
        "hellhole",
        "hellhound",
        "hellicat",
        "hellier",
        "hellion",
        "hellish",
        "hellishly",
        "hellishness",
        "hellkite",
        "hellness",
        "hello",
        "hellroot",
        "hellship",
        "helluo",
        "hellward",
        "hellweed",
        "helly",
        "helm",
        "helmage",
        "helmed",
        "helmet",
        "helmeted",
        "helmetlike",
        "helmetmaker",
        "helmetmaking",
        "helminth",
        "helminthagogic",
        "helminthagogue",
        "helminthiasis",
        "helminthic",
        "helminthism",
        "helminthite",
        "helminthoid",
        "helminthologic",
        "helminthological",
        "helminthologist",
        "helminthology",
        "helminthosporiose",
        "helminthosporoid",
        "helminthous",
        "helmless",
        "helmsman",
        "helmsmanship",
        "helobious",
        "heloderm",
        "helodermatoid",
        "helodermatous",
        "helodes",
        "heloe",
        "heloma",
        "helonin",
        "helosis",
        "helotage",
        "helotism",
        "helotize",
        "helotomy",
        "helotry",
        "help",
        "helpable",
        "helper",
        "helpful",
        "helpfully",
        "helpfulness",
        "helping",
        "helpingly",
        "helpless",
        "helplessly",
        "helplessness",
        "helply",
        "helpmate",
        "helpmeet",
        "helpsome",
        "helpworthy",
        "helsingkite",
        "helve",
        "helvell",
        "helvellaceous",
        "helvellic",
        "helver",
        "helvite"
      ]);


  });

});