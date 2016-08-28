const chai = require('chai');

const assert = chai.assert;

describe('Array', () => {
  it('should start empty', () => {
    const arr = [];
    assert.equal(arr.length, 0);
  });
});
