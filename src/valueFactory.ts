export interface ValueFactory<
  Args extends unknown[],
  Value extends unknown[]
> {
  (...args: Args): Value;
}

export function id<T extends unknown[] = never[]>(): ValueFactory<T, T>;
export function id<T extends Exclude<unknown, unknown[]>>(): ValueFactory<[T], [T]>;
export function id<T1, T2>(): ValueFactory<[T1, T2], [T1, T2]>;
export function id<T1, T2, T3>(): ValueFactory<[T1, T2, T3], [T1, T2, T3]>;
export function id<T1, T2, T3, T4>(): ValueFactory<[T1, T2, T3, T4], [T1, T2, T3, T4]>;
export function id<T1, T2, T3, T4, T5>(): ValueFactory<[T1, T2, T3, T4, T5], [T1, T2, T3, T4, T5]>;
export function id<T1, T2, T3, T4, T5, T6>(): ValueFactory<[T1, T2, T3, T4, T5, T6], [T1, T2, T3, T4, T5, T6]>;
export function id<T extends unknown[]>(): ValueFactory<T, T> {
  return (...args) => args;
}
