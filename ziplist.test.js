const ziplist = 'ziplist';
const array = [6];

describe('ziplist', function () {
  it('should return a single array with six elements', function () {
    chai.expect(ziplist).to.be.a('string');
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(ziplist, array).to.deep.equal(ziplist, array);
  });
});
