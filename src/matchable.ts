import {TagArrayMap} from './util';

export interface Matchable<
  Map extends TagArrayMap
> {
  match(
    fns: {[TTag in keyof Map]: (...value: Map[TTag]) => void}
  ): void;
}
