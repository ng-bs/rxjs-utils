import { map } from 'rxjs/operators';


/**
 * Sort values of an array.
 *
 * - - - - [3, 2, 1] - - - [4, 3] - - - -
 *       mapArraySort()
 * - - - - [1, 2, 3] - - - [3, 4] - - - -
 *
 * @param fn Predicate function to apply to each item in the array.
 */
export function mapArraySort<T>(fn?: (a: T, b: T) => number) {
  [].sort
  return map((arr: T[]) => {
    if (!Array.isArray(arr)) {
      throw new MapArraySortNotArrayError();
    }
    return arr.sort(fn);
  });
}

/**
 * Error which is thrown if a non array value is supplied.
 */
export class MapArraySortNotArrayError extends Error {
  static readonly errorMessage = 'Value received by mapArraySort is not of type array.';
  constructor() {
    super(MapArraySortNotArrayError.errorMessage);
  }
}