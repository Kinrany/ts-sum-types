/** @todo delete this file */

import {SumType, id, SumTypeVariant} from '.';

const Shape = SumType({
  Unit: id(),
  Line: (x: number) => [x],
  Point: (x: number, y: number) => [x, y],
});

type Shape = SumTypeVariant<typeof Shape>;

export default Shape;

const unit = Shape.Unit();
const line = Shape.Line(1);
const point = Shape.Point(1, 2);

const shapes: Shape[] = [unit, line, point];

shapes[0].match({
  Unit() {},
  Line(x) { return x; },
  Point(x, y) { return {x, y}; }
});
