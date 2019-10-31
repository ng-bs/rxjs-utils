import { of } from 'rxjs';
import {
  mapArrayReverse,
  MapArrayReverseNotArrayError,
} from './map-array-reverse';
import { cold } from 'jasmine-marbles';

describe('mapArrayReverse', () => {
  it('should reverse the array', () => {
    const actual = of([1, 2, 3, 4, 5]).pipe(mapArrayReverse());
    const expected = cold('(a|)', { a: [5, 4, 3, 2, 1] });
    expect(actual).toBeObservable(expected);
  });

  it('should throw an exception when the value is not an array', () => {
    const actual = of<any>({ foo: 'meh' }).pipe(mapArrayReverse());

    const expected = cold('#', null, new MapArrayReverseNotArrayError());
    expect(actual).toBeObservable(expected);
  });
});
