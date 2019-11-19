# @ngbs/rxjs

A collection of [RxJS](https://rxjs.dev/) utilities.

## Operators

### mapArrayFilter

Filter an array in an Observable.

```js
of([1, 2, 3, 4])
  .pipe(mapArrayFilter(x => x % 2 === 0))
  .subscribe(console.log);
// [ 2, 4 ]
```

### mapArrayMap

Map an array in an Observable.

```js
of([1, 2, 3, 4])
  .pipe(mapArrayMap(x => x * 2))
  .subscribe(console.log);
// [ 2, 4, 6, 8 ]
```

### mapArrayReduce

Reduce an array in an Observable.

```js
of([1, 2, 3, 4])
  .pipe(mapArrayReduce((acc, cur) => acc + cur, 0))
  .subscribe(console.log);
// 10
```

### mapArrayReduceRight

Reduce an array in an Observable, right to left.

```js
of(['a', 'b', 'c', 'd'])
  .pipe(mapArrayReduceRight((acc, cur) => acc + cur, ''))
  .subscribe(console.log);
// 'dcba'
```

### mapArrayReverse

Reverses an array in an Observable.

```js
of([1, 2, 3, 4, 5])
  .pipe(mapArrayReverse())
  .subscribe(console.log);
// [5, 4, 3, 2, 1]
```
