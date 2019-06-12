import {TagType, TagArrayMap} from './util';
import {ValueFactory} from './valueFactory';
import {VariantFactory} from './variantFactory';

export type SumType<
  Tag extends TagType,
  ArgsMap extends TagArrayMap<Tag>,
  ValueMap extends TagArrayMap<Tag>
> = {
  [a_Tag in Tag]: VariantFactory<
    a_Tag,
    TagArrayMap<a_Tag, ArgsMap[a_Tag]>,
    TagArrayMap<a_Tag, ValueMap[a_Tag]>
  >;
}

export function SumType<
  Tag extends TagType,
  ArgsMap extends TagArrayMap<Tag>,
  ValueMap extends TagArrayMap<Tag>
>(map: {[a_Tag in Tag]: ValueFactory<ArgsMap[a_Tag], ValueMap[a_Tag]>}): SumType<Tag, ArgsMap, ValueMap> {
  const sumType: Partial<SumType<Tag, ArgsMap, ValueMap>> = {};

  for (const tag in map) {
    sumType[tag] = VariantFactory(tag, map[tag]);
  }

  return sumType as SumType<Tag, ArgsMap, ValueMap>;
}
