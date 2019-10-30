import { of } from 'rxjs';
import { mapArrayReduce, MapArrayReduceNotArrayError } from './map-array-reduce';
import { cold } from 'jasmine-marbles';

describe('mapArrayMap', () => {
  it('should map the numeric items of the array', () => {
    const actual = of([1, 2, 3, 4, 5]).pipe(
      mapArrayReduce((sum, cur) => sum + cur, 0)
    );
    const expected = cold('(a|)', { a: 15 });
    expect(actual).toBeObservable(expected);
  });

  it('should map the object items of the array', () => {
    const actual = of([
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Doe' }
    ]).pipe(
      // count the items in the array
      mapArrayReduce((arr, curr) => arr + 1, 0)
    );
    const expected = cold('(a|)', { a: 2 });
    expect(actual).toBeObservable(expected);
  });

  it('should throw an exception when the value is not an array', () => {
    const actual = of<any>({ foo: 'meh' }).pipe(
      mapArrayReduce((acc, cur) => acc, {})
    );

    const expected = cold('#', null, new MapArrayReduceNotArrayError());
    expect(actual).toBeObservable(expected);
  });
});