import {Sum, type} from '.';

const Thing = new Sum({
  Unit: type(),
  Variable: type<string>(),
  Point: type<number, number>(),
});

const Unit = Thing.variant('Unit');
const Variable = Thing.variant('Variable');
const Point = Thing.variant('Point');

const things = [Unit(), Variable('foo'), Point(100, 200)];

function inspect(thing: typeof things[number]): void {
  thing.match({
    Unit: () => console.log('Unit'),
    Variable: (s) => console.log(`Variable: ${s}`),
    Point: (x, y) => console.log(`Point: ${x}, ${y}`)
  });
}
