import { readFile } from 'fs';
import { expect } from 'chai';

describe('String', function() {
  // SyntaxError: /Users/huixisheng/x/lab/test/mocha-demo/test/import.spec.js: Unexpected token, expected , (5:31)
  // it('readFile is function' () => {
  it('readFile is function', function() {
    expect(readFile).to.be.a('function');
  });
});