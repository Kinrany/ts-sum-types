import Shape from './shape';

export default function shape_test() {
  const unit: Shape = Shape.Unit(undefined);
  const point: Shape = Shape.Point([1, 2]);
  const circle: Shape = Shape.Circle({center: [1, 2], radius: 3});
  const triangle: Shape = Shape.Triangle([[1, 2], [2, 3], [3, 4]]);

  const shapes: Shape[] = [unit, point, circle, triangle];

  const log = (name: string) => (value: unknown) => console.log(`${name}: ${value}`);

  for (const shape of shapes) {
    shape.match({
      Unit: log('Unit'),
      Point: log('Point'),
      Circle: log('Circle'),
      Triangle: log('Triangle'),
    });
  }
}
