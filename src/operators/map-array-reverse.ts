import { map } from 'rxjs/operators';

/**
 * Map values of an array.
 *
 * - - - - [1, 2, 3, 4, 5] - - - -
 *       mapArrayReverse()
 * - - - - [5, 4, 3, 2, 1] - - - -
 *
 */
export function mapArrayReverse<T, R>() {
  return map((arr: T[]) => {
    if (!Array.isArray(arr)) {
      throw new MapArrayReverseNotArrayError();
    }
    return arr.reverse();
  });
}

/**
 * Error which is thrown if a non array value is supplied.
 */
export class MapArrayReverseNotArrayError extends Error {
  static readonly errorMessage =
    'Value received by mapArrayReverse is not of type array.';
  constructor() {
    super(MapArrayReverseNotArrayError.errorMessage);
  }
}
