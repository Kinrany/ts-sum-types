import {SumType, id, SumTypeVariant} from 'ts-sum-types';

// Create an `enum` to classify a web event.
const WebEvent = SumType({
  // An `enum` may either be `unit-like`,
  PageLoad: id(),
  PageUnload: id(),
  // like tuple structs,
  KeyPress: id<number>(),
  Paste: id<string>(),
  // or like structures.
  Click: id<{ x: number; y: number }>(),
});
type WebEvent = SumTypeVariant<typeof WebEvent>;

// A function which takes a `WebEvent` enum as an argument
export function inspect(event: WebEvent) {
  event.match({
    PageLoad: () => console.log("page loaded"),
    PageUnload: () => console.log("page unloaded"),
    // Destructure `c` from inside the `enum`.
    KeyPress: (c) => console.log(`pressed '${c}'.`),
    Paste: (s) => console.log(`pasted "${s}".`),
    // Destructure `Click` into `x` and `y`.
    Click({ x, y }) {
      console.log(`clicked at x=${x}, y=${y}.`);
    },
  });
}

inspect(WebEvent.Click({x: 100, y: 200}));
