import { testFunction } from './index';
import { cold } from 'jasmine-marbles';

describe('testFunction', () => {
  it('should work', () => {
    const value = 'fingers crossed';
    const result = testFunction(value);
    const expected = cold('(a|)', { a: value });
    expect(result).toBeObservable(expected);
  });
});