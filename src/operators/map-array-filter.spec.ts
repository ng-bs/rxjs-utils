import { of } from 'rxjs';
import { mapArrayFilter, MapArrayFilterNotArrayError } from './map-array-filter';
import { cold } from 'jasmine-marbles';

describe('mapArrayFilter', () => {
  it('should filter out the odd items of the array', () => {
    const actual = of([1, 2, 3, 4, 5]).pipe(
      mapArrayFilter(x => x % 2 === 0)
    );
    const expected = cold('(a|)', { a: [2, 4] });
    expect(actual).toBeObservable(expected);
  });

  it('should filter the object items of the array', () => {
    const actual = of([
      { firstName: 'John', lastName: 'Doe', gender: 'M' },
      { firstName: 'Jane', lastName: 'Doe', gender: 'F' }
    ]).pipe(
      mapArrayFilter(x => x.gender === 'F')
    );
    const expected = cold('(a|)', {
      a: [
        { firstName: 'Jane', lastName: 'Doe', gender: 'F' }
      ]
    });
    expect(actual).toBeObservable(expected);
  });

  it('should throw an exception when the value is not an array', () => {
    const actual = of<any>({ foo: 'meh' }).pipe(
      mapArrayFilter(x => !!x)
    );

    const expected = cold('#', null, new MapArrayFilterNotArrayError());
    expect(actual).toBeObservable(expected);
  });
});