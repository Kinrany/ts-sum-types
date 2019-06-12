type KeyType = string | number | symbol;

class EnumInstance<TTag extends KeyType, TValue> {
  constructor(
    readonly tag: TTag,
    readonly value: TValue
  ) {}

  match(fns: Record<TTag, (value: TValue) => void>): void {
    fns[this.tag](this.value);
  }
};

type EnumConstructor<TTag extends KeyType, TValue> = (value: TValue) => EnumInstance<TTag, TValue>;

function create_enum_constructor<TMap, TTag extends keyof TMap>(tag: TTag): EnumConstructor<TTag, TMap[TTag]> {
  return <TValue extends TMap[TTag]>(value: TValue) => new EnumInstance(tag, value);
}

type EnumNamespace<TMap> = {
  [s in keyof TMap]: EnumConstructor<s, TMap[s]>;
};

export function create_enum_namespace<TMap>(map: TMap): EnumNamespace<TMap> {
  const tags = Object.keys(map) as (keyof TMap)[];
  const namespace: Partial<EnumNamespace<TMap>> = {};
  tags.forEach(<TTag extends keyof TMap>(tag: TTag) => {
    namespace[tag] = create_enum_constructor<TMap, TTag>(tag);
  });
  return namespace as EnumNamespace<TMap>;
}

export type EnumUnion<TNamespace> = TNamespace extends EnumNamespace<infer TMap>
  ? {[s in keyof TMap]: EnumInstance<s, TMap[s]>}[keyof TMap]
  : never;

export function type<T = undefined>(): T {
  return undefined as unknown as T;
}
