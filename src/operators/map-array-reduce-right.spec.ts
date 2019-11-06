import { of } from 'rxjs';
import { mapArrayReduceRight, MapArrayReduceRightNotArrayError } from './map-array-reduce-right';
import { cold } from 'jasmine-marbles';

describe('mapArrayReduceRight', () => {
  it('should reduce the items of the array, end to start', () => {
    const actual = of(['1', '2', '3', '4', '5']).pipe(
      mapArrayReduceRight((sum, cur) => sum + cur, '')
    );
    const expected = cold('(a|)', { a: '54321' });
    expect(actual).toBeObservable(expected);
  });

  it('should reduce object items of the array, end to start', () => {
    const actual = of([
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Doe' }
    ]).pipe(
      // count the items in the array
      mapArrayReduceRight((arr, curr) => arr + curr.firstName, '')
    );
    const expected = cold('(a|)', { a: 'JaneJohn' });
    expect(actual).toBeObservable(expected);
  });

  it('should throw an exception when the value is not an array', () => {
    const actual = of<any>({ foo: 'meh' }).pipe(
      mapArrayReduceRight((acc, cur) => acc, {})
    );

    const expected = cold('#', null, new MapArrayReduceRightNotArrayError());
    expect(actual).toBeObservable(expected);
  });
});