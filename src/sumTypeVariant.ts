import {Variant} from './variant';
import {SumType} from './sumType';

export type SumTypeVariant<T>
  = T extends SumType<infer Tag, never, infer ValueMap>
    ? Variant<{[a_Tag in Tag]: ValueMap[a_Tag]}>
    : never;
