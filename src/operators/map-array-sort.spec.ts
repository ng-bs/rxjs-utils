import { of } from 'rxjs';
import { mapArraySort, MapArraySortNotArrayError } from './map-array-sort';
import { cold } from 'jasmine-marbles';

describe('mapArrayMap', () => {
  it('should sort the numeric items of the array', () => {
    const actual = of([5, 4, 3, 2, 1]).pipe(
      mapArraySort()
    );
    const expected = cold('(a|)', { a: [1, 2, 3, 4, 5] });
    expect(actual).toBeObservable(expected);
  });

  it('should sort the numeric items of the array with predicate', () => {
    const actual = of([5, 4, 3, 2, 1]).pipe(
      mapArraySort((a, b) => a > b ? 1 : -1)
    );
    const expected = cold('(a|)', { a: [1, 2, 3, 4, 5] });
    expect(actual).toBeObservable(expected);
  });

  it('should sort the object items of the array by firstName', () => {
    const actual = of([
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Doe' }
    ]).pipe(
      mapArraySort((a, b) => a.firstName > b.firstName ? 1 : -1)
    );
    const expected = cold('(a|)', {
      a: [
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
      ]
    });
    expect(actual).toBeObservable(expected);
  });

  it('should throw an exception when the value is not an array', () => {
    const actual = of<any>({ foo: 'meh' }).pipe(
      mapArraySort()
    );

    const expected = cold('#', null, new MapArraySortNotArrayError());
    expect(actual).toBeObservable(expected);
  });
});