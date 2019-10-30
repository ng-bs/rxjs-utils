import { of } from 'rxjs';
import { mapArrayMap, MapArrayMapNotArrayError } from './map-array-map';
import { cold } from 'jasmine-marbles';

describe('mapArrayMap', () => {
  it('should map the numeric items of the array', () => {
    const actual = of([1, 2, 3, 4, 5]).pipe(
      mapArrayMap(x => x * 2)
    );
    const expected = cold('(a|)', { a: [2, 4, 6, 8, 10] });
    expect(actual).toBeObservable(expected);
  });

  it('should map the object items of the array', () => {
    const actual = of([
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Doe' }
    ]).pipe(
      mapArrayMap(x => ({ name: `${x.firstName} ${x.lastName}` }))
    );
    const expected = cold('(a|)', {
      a: [
        { name: 'John Doe' },
        { name: 'Jane Doe' }
      ]
    });
    expect(actual).toBeObservable(expected);
  });

  it('should throw an exception when the value is not an array', () => {
    const actual = of<any>({ foo: 'meh' }).pipe(
      mapArrayMap(x => x)
    );

    const expected = cold('#', null, new MapArrayMapNotArrayError());
    expect(actual).toBeObservable(expected);
  });
});