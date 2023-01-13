import {Matrix} from "./Matrix";
import MatrixImpl from "./MatrixImpl";

export default class MarkedMatrixImpl<T> extends MatrixImpl<T> implements Matrix<T> {
  constructor(
    private readonly _origin: Matrix<T>,
    private _mark = Symbol(),
  ) {
    super();
  }

  get mark() {
    return this._mark;
  }

  clear() {
    const wasEmpty = this._isEmpty();
    super.clear();
    if (!wasEmpty) {
      this._assignNewMark();
    }
  }

  delete(i: number, j: number) {
    const wasDeleted = super.delete(i, j);
    if (wasDeleted) {
      this._assignNewMark();
    }
    return wasDeleted;
  }

  set(i: number, j: number, value: T) {
    const previousValue = this.get(i, j);
    super.set(i, j, value);
    if (previousValue !== value) {
      this._assignNewMark();
    }
    return this;
  }

  private _assignNewMark() {
    this._mark = Symbol();
  }
}
