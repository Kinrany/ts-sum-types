export default class Point {
  constructor(
    readonly x: number,
    readonly y: number
  ) {}

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
