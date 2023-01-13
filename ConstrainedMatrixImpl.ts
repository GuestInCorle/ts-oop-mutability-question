import {ConstrainedMatrix, ReadonlyConstrainedMatrix} from "./ConstrainedMatrix";
import {Matrix, ReadonlyMatrix} from "./Matrix";
import {ReadonlyTransformedMatrixImpl, TransformedMatrixImpl} from "./TransformedMatrixImpl";
import {createClockwiseTurn, createCounterclockwiseTurn, createOverturn} from "./transforms";

// fixme export default
export class ConstrainedMatrixImpl<T> implements ConstrainedMatrix<T> {
  constructor(
    public readonly matrix: Matrix<T>,
    public readonly height: number,
    public readonly width: number,
  ) {}

  turnClockwise(): ConstrainedMatrix<T> {
    // noinspection JSSuspiciousNameCombination
    const height = this.width;
    // noinspection JSSuspiciousNameCombination
    const width = this.height;
    const matrix = new TransformedMatrixImpl(
      this.matrix,
      createClockwiseTurn(height, width),
    );
    return new ConstrainedMatrixImpl(matrix, height, width);
  }

  turnOver(): ConstrainedMatrix<T> {
    const {height, width} = this;
    const matrix = new TransformedMatrixImpl(
      this.matrix,
      createOverturn(height, width),
    );
    return new ConstrainedMatrixImpl(matrix, height, width);
  }

  turnCounterclockwise(): ConstrainedMatrix<T> {
    // noinspection JSSuspiciousNameCombination
    const height = this.width;
    // noinspection JSSuspiciousNameCombination
    const width = this.height;
    const matrix = new TransformedMatrixImpl(
      this.matrix,
      createCounterclockwiseTurn(height, width),
    );
    return new ConstrainedMatrixImpl(matrix, height, width);
  }
}

// fixme export default
export class ReadonlyConstrainedMatrixImpl<T> implements ReadonlyConstrainedMatrix<T> {
  constructor(
    public readonly matrix: ReadonlyMatrix<T>,
    public readonly height: number,
    public readonly width: number,
  ) {}

  turnClockwise(): ReadonlyConstrainedMatrix<T> {
    // noinspection JSSuspiciousNameCombination
    const height = this.width;
    // noinspection JSSuspiciousNameCombination
    const width = this.height;
    const matrix = new ReadonlyTransformedMatrixImpl(
      this.matrix,
      createClockwiseTurn(height, width),
    );
    return new ReadonlyConstrainedMatrixImpl(matrix, height, width);
  }

  turnOver(): ReadonlyConstrainedMatrix<T> {
    const {height, width} = this;
    const matrix = new ReadonlyTransformedMatrixImpl(
      this.matrix,
      createOverturn(height, width),
    );
    return new ReadonlyConstrainedMatrixImpl(matrix, height, width);
  }

  turnCounterclockwise(): ReadonlyConstrainedMatrix<T> {
    // noinspection JSSuspiciousNameCombination
    const height = this.width;
    // noinspection JSSuspiciousNameCombination
    const width = this.height;
    const matrix = new ReadonlyTransformedMatrixImpl(
      this.matrix,
      createCounterclockwiseTurn(height, width),
    );
    return new ReadonlyConstrainedMatrixImpl(matrix, height, width);
  }
}
