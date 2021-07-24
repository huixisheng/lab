var chai = require('chai');
var expect = chai.expect;


describe('String', function() {
  // http://www.jianshu.com/p/223dbcea7a76
  var strForTest = 'just do it';
  var lenghtStr = strForTest.length;
  describe('str.substring(indexStart[, indexEnd])', function() {
    it('If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; for example, str.substring(1, 0) == str.substring(0, 1).', function() {
      expect(strForTest.substring(0, 3)).to.equal('jus');
      expect(strForTest.substring(0, -1)).to.equal('');
      expect(strForTest.substring(3, 0)).to.equal('jus');
      expect(strForTest.substring(3)).to.equal('t do it');
    });
    it('If indexStart equals indexEnd, substring() returns an empty string.', function() {
      expect(strForTest.substring(lenghtStr)).to.equal('');
    });
    it('If indexEnd is omitted, substring() extracts characters to the end of the string.', function() {
      expect(strForTest.substring(0, lenghtStr + 5)).to.equal('just do it');
    });
    it('If either argument is less than 0 or is NaN, it is treated as if it were 0.', function() {
      expect(strForTest.substring(-1, lenghtStr + 5)).to.equal('just do it');
      expect(strForTest.substring(null, 2)).to.equal('ju');
    });
    it('If either argument is greater than stringName.length, it is treated as if it were stringName.length', function() {
      expect(strForTest.substring(1, lenghtStr + 5)).to.equal('ust do it');
    })
  });

  describe('str.substr(start[, length])', function() {
    it('If start is positive and is greater than or equal to the length of the string, substr() returns an empty string.', function() {
      expect(strForTest.substr(lenghtStr + 5)).to.equal('');
    });
    it('If start is negative, substr() uses it as a character index from the end of the string; the index of the last character is -1. If start is negative and abs(start) is larger than the length of the string, substr() uses 0 as the start index.', function() {
      expect(strForTest.substr(-3, 3)).to.equal(' it');
      expect(strForTest.substr(-20, 3)).to.equal('jus');
      expect(strForTest.substr(20, 3)).to.equal('');
    });
    it('If length is 0 or negative, substr() returns an empty string. If length is omitted, substr() extracts characters to the end of the string.', function() {
      expect(strForTest.substr(0, 0)).to.equal('');
      expect(strForTest.substr(0, -2)).to.equal('');
    });
  });

  describe('str.slice(beginIndex[, endIndex])', function() {
    it('slice', function() {
      expect(strForTest.slice(1, 5)).to.equal('ust ');
      expect(strForTest.slice(1, -1)).to.equal('ust do i');
      expect(strForTest.slice(1, 0)).to.equal('');
      expect(strForTest.slice(1)).to.equal('ust do it');
      expect(strForTest.slice(lenghtStr + 5)).to.equal('');
      expect(strForTest.slice(-3)).to.equal(' it');
      expect(strForTest.slice(-3, -1)).to.equal(' i');
      expect(strForTest.slice(0, -1)).to.equal('just do i');
    });
  });

});