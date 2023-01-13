import {Cell, Matrix, ReadonlyMatrix} from "./Matrix";
import {Transform} from "./Transform";

// fixme default
export class ReadonlyTransformedMatrixImpl<T> implements ReadonlyMatrix<T> {
  constructor(
    protected readonly _origin: ReadonlyMatrix<T>,
    protected readonly _transform: Transform,
  ) {}

  has(i: number, j: number): boolean {
    return this._origin.has(...this._transform(i, j));
  }

  get(i: number, j: number): T | undefined {
    return this._origin.get(...this._transform(i, j));
  }

  [Symbol.iterator](): IterableIterator<Cell<T>> {
    return this._origin[Symbol.iterator]();
  }
}

// fixme default
export class TransformedMatrixImpl<T> extends ReadonlyTransformedMatrixImpl<T> implements Matrix<T> {
  constructor(
    protected readonly _origin: Matrix<T>,
    protected readonly _transform: Transform,
  ) {
    super(_origin, _transform);
  }

  clear() {
    this._origin.clear();
  }

  delete(i: number, j: number) {
    return this._origin.delete(...this._transform(i, j));
  }

  set(i: number, j: number, value: T) {
    this._origin.set(...this._transform(i, j), value);
    return this;
  }
}
