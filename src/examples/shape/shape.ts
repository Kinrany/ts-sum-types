import { create_enum_namespace, type, EnumUnion} from 'lib';
import Point from './point';

const Shape = create_enum_namespace({
  Unit: type(),
  Point: type<Point>(),
  Circle: type<{
    center: Point;
    radius: number;
  }>(),
  Triangle: type<[Point, Point, Point]>()
});

type Shape = EnumUnion<typeof Shape>;

export default Shape;
