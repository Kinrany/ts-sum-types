export type TagType = string;

export type TagArrayMap<
  Tag extends TagType = TagType,
  Array extends unknown[] = unknown[]
>
  = Record<Tag, Array>;
