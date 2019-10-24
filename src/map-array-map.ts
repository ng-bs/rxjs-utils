import { map } from 'rxjs/operators';


/**
 * Map values of an array.
 *
 * - - - - [1, 2, 3] - - - [3, 4] - - - -
 *       mapArrayMap(val => val*2)
 * - - - - [2, 4, 6] - - - [6, 8] - - - -
 *
 * @param fn Predicate function to apply to each item in the array.
 */
export function mapArrayMap<T, R>(fn: (value: T, index: number, array: T[]) => R) {
  return map((arr: T[]) => {
    if (!Array.isArray(arr)) {
      throw new MapArrayMapNotArrayError();
    }
    return arr.map(fn);
  });
}

/**
 * Error which is thrown if a non array value is supplied.
 */
export class MapArrayMapNotArrayError extends Error {
  static readonly errorMessage = 'Value received by mapArrayMap is not of type array.';
  constructor() {
    super(MapArrayMapNotArrayError.errorMessage);
  }
}