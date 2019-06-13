import {SumType, id, SumTypeVariant} from 'ts-sum-types';
import Point from './point';

const Shape = SumType({
  Unit: id(),
  Point: id<Point>(),
  Circle: id<{
    center: Point;
    radius: number;
  }>(),
  Triangle: id<[Point, Point, Point]>()
});

type Shape = SumTypeVariant<typeof Shape>;

export default Shape;
