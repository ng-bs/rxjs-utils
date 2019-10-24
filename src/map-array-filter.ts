import { map } from 'rxjs/operators';

/**
 * Filter values of an array.
 * - - - - [1, 2, 3] - - - [3, 4] - - - -
 *       mapArrayFilter(val => val % 2 === 0)
 * - - - - [   4   ] - - - [   8] - - - -
 * @param fn Predicate function to filter item in the array.
 */
export function mapArrayFilter<T>(fn: (value: T, index: number, array: T[]) => boolean) {
  return map((arr: T[]) => {
    if (!Array.isArray(arr)) {
      throw new MapArrayFilterNotArrayError();
    }
    return arr.filter(fn);
  });
}

/**
 * Error which is thrown if a non array value is supplied.
 */
export class MapArrayFilterNotArrayError extends Error {
  static readonly errorMessage = 'Value received by mapArrayFilter is not of type array.';
  constructor() {
    super(MapArrayFilterNotArrayError.errorMessage);
  }
}