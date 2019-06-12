# typescript-sum-types

## Overview
Algebraic sum types (*aka* [tagged unions]) for TypeScript.

Designed after [Rust's enums].

[tagged unions]: https://en.wikipedia.org/wiki/Tagged_union
[Rust's enums]: https://doc.rust-lang.org/stable/rust-by-example/custom_types/enum.html

## Installation

```bash
npm install --save typescript-sum-types
```

This library exports a ES6 module with types.

```typescript
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
};
type WebEvent = EnumUnion<typeof WebEvent>;

// A function which takes a `WebEvent` enum as an argument
function inspect(event: WebEvent) {
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
```

## Development

```bash
npm install
npm run test
npm run build
```

## Prior art

- [pelotom/unionize](https://github.com/pelotom/unionize)
- [twop/ts-union](https://github.com/twop/ts-union)
