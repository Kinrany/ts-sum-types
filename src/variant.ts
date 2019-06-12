import {TagType, TagArrayMap} from './util';
import {Matchable} from './matchable';

export interface Variant<Map extends TagArrayMap> extends Matchable<Map> {}

export class VariantClass<
  Tag extends TagType,
  Map extends TagArrayMap<Tag>
> implements Variant<Map> {
  constructor(
    private readonly tag: Tag,
    private readonly value: Map[Tag]
  ) {}

  match(
    fns: {[a_Tag in Tag]: (...value: Map[a_Tag]) => void}
  ): void {
    fns[this.tag](...this.value);
  }
}

export function Variant<
  Tag extends TagType,
  Map extends TagArrayMap<Tag>
>(tag: Tag, value: Map[Tag]): Variant<Map> {
  return new VariantClass(tag, value);
}
