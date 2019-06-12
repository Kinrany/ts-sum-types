import {TagType} from './util';
import {Variant} from './variant';
import {SumType} from './sumType';

export type SumTypeVariant<T>
  = T extends SumType<infer Tag, Record<TagType, unknown[]>, infer ValueMap>
    ? Variant<{[a_Tag in Tag]: ValueMap[a_Tag]}>
    : never;
