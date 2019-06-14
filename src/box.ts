import {TagType} from './util';

export class Box <Tag extends TagType, Value extends unknown[]> {
  constructor(
    private readonly tag: Tag,
    private readonly value: Value
  ) {}

  match (matches: Record<Tag, (...args: Value) => void>): void {
    matches[this.tag](...this.value);
  }

  is <a_Tag extends Tag> (tag: a_Tag): this is this & Box<a_Tag, Value> {
    return this.tag === tag;
  }
}
