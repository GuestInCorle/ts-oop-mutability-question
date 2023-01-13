import {Matrix, ReadonlyMatrix} from "./Matrix";

export interface ConstrainedMatrix<T> extends ReadonlyConstrainedMatrix<T> {
  readonly matrix: Matrix<T>;
  readonly height: number;
  readonly width: number;
  turnClockwise(): ConstrainedMatrix<T>;
  turnCounterclockwise(): ConstrainedMatrix<T>;
  turnOver(): ConstrainedMatrix<T>;
}

export interface ReadonlyConstrainedMatrix<T> {
  readonly matrix: ReadonlyMatrix<T>;
  readonly height: number;
  readonly width: number;
  turnClockwise(): ReadonlyConstrainedMatrix<T>;
  turnCounterclockwise(): ReadonlyConstrainedMatrix<T>;
  turnOver(): ReadonlyConstrainedMatrix<T>;
}
