import Shape from './shape';
import Point from './point';

export default function shape_test() {
  const unit: Shape = Shape.Unit(undefined);
  const point: Shape = Shape.Point(new Point(1, 2));
  const circle: Shape = Shape.Circle({center: new Point(1, 2), radius: 3});
  const triangle: Shape = Shape.Triangle([new Point(1, 2), new Point(2, 3), new Point(3, 4)]);

  const shapes: Shape[] = [unit, point, circle, triangle];

  for (const shape of shapes) {
    shape.match({
      Unit: () => console.log('Unit: nothing'),
      Point(point) {
        console.log(`Point: ${point}`);
      },
      Circle({center, radius}) {
        console.log(`Circle: {center: ${center}, radius: ${radius}}`);
      },
      Triangle(points) {
        console.log(`Triangle: ${points}`);
      },
    });
  }
}
