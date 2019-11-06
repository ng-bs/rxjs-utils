import { map } from 'rxjs/operators';


/**
 * Reduce values of an array.
 *
 * - - - - [1, 2, 3] - - - [3, 4] - - - -
 *       mapArrayReduce((sum, val) => sum + val, 0)
 * - - - -     6     - - -    7   - - - -
 *
 * @param fn Predicate function to apply to each item in the array.
 * @param init The initial starting value.
 */
export function mapArrayReduce<T, R>(fn: (acc: R, curr: T) => R, init: R) {
  return map((arr: T[]) => {
    if (!Array.isArray(arr)) {
      throw new MapArrayReduceNotArrayError();
    }
    return arr.reduce(fn, init);
  });
}

/**
 * Error which is thrown if a non array value is supplied.
 */
export class MapArrayReduceNotArrayError extends Error {
  static readonly errorMessage = 'Value received by mapArrayReduce is not of type array.';
  constructor() {
    super(MapArrayReduceNotArrayError.errorMessage);
  }
}