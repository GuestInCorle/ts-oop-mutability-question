import {Cell, Matrix} from "./Matrix";

export default class MatrixImpl<T> implements Matrix<T> {
  private _cells = new Map<CellId, T>();

  clear() {
    this._cells.clear();
  }

  delete(i: number, j: number) {
    return this._cells.delete(MatrixImpl._stringifyCellId(i, j));
  }

  set(i: number, j: number, value: T) {
    this._cells.set(MatrixImpl._stringifyCellId(i, j), value);
    return this;
  }

  has(i: number, j: number): boolean {
    return this._cells.has(MatrixImpl._stringifyCellId(i, j));
  }

  get(i: number, j: number): T | undefined {
    return this._cells.get(MatrixImpl._stringifyCellId(i, j));
  }

  *[Symbol.iterator](): IterableIterator<Cell<T>> {
    for (const [id, value] of this._cells) {
      const [i, j] = MatrixImpl._parseCellId(id);
      yield {i, j, value};
    }
  }

  protected _isEmpty() {
    return this._cells.size === 0;
  }

  private static _stringifyCellId(i: number, j: number): CellId {
    return `${i}:${j}`;
  }

  private static _parseCellId(id: CellId) {
    return id.split(':').map(_ => parseInt(_)) as [i: number, j: number];
  }
}

type CellId = `${number}:${number}`;
