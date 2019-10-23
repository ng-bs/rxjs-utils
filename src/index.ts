import { Observable, of } from 'rxjs';

export function testFunction(foo: any): Observable<any> {
  return of(foo);
}
