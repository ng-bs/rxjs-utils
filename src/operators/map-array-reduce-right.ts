import { map } from 'rxjs/operators';


/**
 * Reduce values of an array, right to left.
 *
 * - - - - ['a', 'b'] - - - ['c', 'd'] - - - -
 *       mapArrayReduceRight((acc, val) => acc + val, '')
 * - - - -    'ba'    - - -    'dc'    - - - -
 *
 * @param fn Predicate function to apply to each item in the array.
 * @param init The initial starting value.
 */
export function mapArrayReduceRight<T, R>(fn: (acc: R, curr: T) => R, init: R) {
  return map((arr: T[]) => {
    if (!Array.isArray(arr)) {
      throw new MapArrayReduceRightNotArrayError();
    }
    return arr.reduceRight(fn, init);
  });
}

/**
 * Error which is thrown if a non array value is supplied.
 */
export class MapArrayReduceRightNotArrayError extends Error {
  static readonly errorMessage = 'Value received by mapArrayReduce is not of type array.';
  constructor() {
    super(MapArrayReduceRightNotArrayError.errorMessage);
  }
}