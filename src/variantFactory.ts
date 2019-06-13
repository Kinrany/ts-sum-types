import {TagType, TagArrayMap} from './util';
import {Variant} from './variant';
import {ValueFactory, DestructValueFactory} from './valueFactory';

export type VariantFactory<
  Tag extends TagType,
  ArgsMap extends TagArrayMap<Tag>,
  ValueMap extends TagArrayMap<Tag>
>
  = <T extends Tag>(...args: ArgsMap[T]) => Variant<Record<T, ValueMap[T]>>;

export function VariantFactory<
  Tag extends TagType,
  Fn extends ValueFactory<Tag>
>(tag: Tag, fn: Fn): VariantFactory<
  Tag,
  DestructValueFactory<Fn>['argsMap'],
  DestructValueFactory<Fn>['valueMap']
> {
  type ArgsMap = DestructValueFactory<Fn>['argsMap'];

  return (...args: ArgsMap[Tag]) => Variant(tag, fn<Tag>(...args));
}
