export function type (): [];
export function type <T extends unknown[]> (): T;
export function type <T extends Exclude<unknown, unknown[]>> (): [T];
export function type <T1, T2> (): [T1, T2];
export function type <T1, T2, T3> (): [T1, T2, T3];
export function type <T1, T2, T3, T4> (): [T1, T2, T3, T4];
export function type <T1, T2, T3, T4, T5> (): [T1, T2, T3, T4, T5];
export function type <T> (): T {
  return undefined as unknown as T;
}
