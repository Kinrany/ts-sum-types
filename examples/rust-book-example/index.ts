import { create_enum_namespace, type, EnumUnion} from 'ts-sum-types';

// Create an `enum` to classify a web event.
const WebEvent = create_enum_namespace({
  // An `enum` may either be `unit-like`,
  PageLoad: type(),
  PageUnload: type(),
  // like tuple structs,
  KeyPress: type<number>(),
  Paste: type<string>(),
  // or like structures.
  Click: type<{ x: number; y: number }>(),
});
type WebEvent = EnumUnion<typeof WebEvent>;

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
