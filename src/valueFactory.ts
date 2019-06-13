import {TagType, TagArrayMap} from './util';

export type ValueFactory<
  Tag extends TagType = TagType,
  ArgsMap extends TagArrayMap<Tag> = TagArrayMap<Tag>,
  ValueMap extends TagArrayMap<Tag> = TagArrayMap<Tag>
>
  = <T extends Tag>(...args: ArgsMap[T]) => ValueMap[T];

export type DestructValueFactory<Fn>
  = Fn extends ValueFactory<infer Tag, infer ArgsMap, infer ValueMap>
    ? {tag: Tag; argsMap: ArgsMap; valueMap: ValueMap}
    : never;

type IdFactory<T extends unknown[]> = ValueFactory<string, Record<string, T>, Record<string, T>>;

function idFn<T extends unknown[]>(...args: T): T {
  return args;
}

export function id<T extends unknown[] = never[]>(): IdFactory<T>;
export function id<T extends Exclude<unknown, unknown[]>>(): IdFactory<[T]>;
export function id<T1, T2>(): IdFactory<[T1, T2]>;
export function id<T1, T2, T3>(): IdFactory<[T1, T2, T3]>;
export function id<T1, T2, T3, T4>(): IdFactory<[T1, T2, T3, T4]>;
export function id<T1, T2, T3, T4, T5>(): IdFactory<[T1, T2, T3, T4, T5]>;
export function id<T1, T2, T3, T4, T5, T6>(): IdFactory<[T1, T2, T3, T4, T5, T6]>;
export function id<T extends unknown[]>(): IdFactory<T> {
  return idFn;
}
