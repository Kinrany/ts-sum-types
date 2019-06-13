import {TagType, TagArrayMap} from './util';
import {ValueFactory} from './valueFactory';
import {VariantFactory} from './variantFactory';

type TagValueFactoryMap<
  Tag extends TagType = TagType,
  ArgsMap extends TagArrayMap<Tag> = TagArrayMap<Tag>,
  ValueMap extends TagArrayMap<Tag> = TagArrayMap<Tag>
>
  = {[a_Tag in Tag]: ValueFactory<a_Tag, ArgsMap, ValueMap>};

type DestructMap<Map extends TagValueFactoryMap>
  = Map extends TagValueFactoryMap<infer Tag, infer ArgsMap, infer ValueMap>
    ? {tag: Tag; argsMap: ArgsMap; valueMap: ValueMap}
    : never;

export type SumType<
  Map extends TagValueFactoryMap
> = {
  [a_Tag in DestructMap<Map>['tag']]: VariantFactory<
    a_Tag,
    Record<a_Tag, DestructMap<Map>['argsMap'][a_Tag]>,
    Record<a_Tag, DestructMap<Map>['valueMap'][a_Tag]>
  >;
}

export function SumType<
  Map extends TagValueFactoryMap
>(map: Map): SumType<Map> {
  const sumType: Partial<SumType<Map>> = {};

  for (const tag in map) {
    sumType[tag] = VariantFactory(tag, map[tag]);
  }

  return sumType as SumType<Map>;
}
