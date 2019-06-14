import {TagType} from './util';
import {Box} from './box';

export class Sum <Variants extends Record<TagType, unknown[]>> {
  constructor(_variants: Variants) {}

  variant <Tag extends TagType & keyof Variants> (tag: Tag): (...args: Variants[Tag]) => Box<Tag, Variants[Tag]> {
    return (...args) => new Box(tag, args);
  }
}
