import { sort } from './index';
import * as chai from 'chai';

const expect = chai.expect;

describe('Testing in ascending order:', () => {

  it('should remove a single unordered item', () => {
    sort([1, 2, 5, 4]).then(value => {
      expect(value).to.equal([1, 2, 4]);
    });
  });

  
  it('should remove multiple unordered items', () => {
    sort([1, 2, 5, 0, 3, 9, 4]).then(value => {
      expect(value).to.equal([1, 2, 5, 9]);
    });
  });
  
  
  it('should not remove ordered items', () => {
    sort([1, 2, 3]).then(value => {
      expect(value).to.equal([1, 2, 3]);
    });
  });
  
  
  it('should handle an empty array', () => {
    sort([]).then(value => {
      expect(value).to.equal([]);
    });
  });
  
});

describe('Testing in descending order:', () => {
  
  it('should not remove ordered items', () => {
    sort([3, 2, 1], true).then(value => {
      expect(value).to.equal([3, 2, 1]);
    });
  });
  
  it('should remove multiple unordered items', () => {
    sort([9, 7, 10, 6, 5, 11, 12, 4], true).then(value => {
      expect(value).to.equal([9, 7, 6, 5, 4]);
    });
  });
  
  it('should remove a single unordered item', () => {
    sort([4, 3, 6, 2, 1], true).then(value => {
      expect(value).to.equal([4, 3, 2, 1]);
    });
  });

  it('should handle an empty array', () => {
    sort([], true).then(value => {
      expect(value).to.equal([]);
    });
  });
  
});