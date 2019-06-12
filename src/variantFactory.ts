import {TagType, TagArrayMap} from './util';
import {Variant} from './variant';
import {ValueFactory} from './valueFactory';

export interface VariantFactory<
  Tag extends TagType,
  ArgsMap extends TagArrayMap<Tag>,
  ValueMap extends TagArrayMap<Tag>
> {
  (...args: ArgsMap[Tag]): Variant<
    {[a_Tag in Tag]: ValueMap[a_Tag]}
  >;
}

export function VariantFactory<
  Tag extends TagType,
  Args extends unknown[],
  Value extends unknown[]
>(tag: Tag, fn: ValueFactory<Args, Value>): VariantFactory<
  Tag,
  TagArrayMap<Tag, Args>,
  TagArrayMap<Tag, Value>
> {
  return (...args: Args) => Variant<Tag, Record<Tag, Value>>(tag, fn(...args));
}
