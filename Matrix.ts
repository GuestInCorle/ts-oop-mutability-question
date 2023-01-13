export interface Matrix<T> extends ReadonlyMatrix<T> {
  clear(): void;

  /**
   * @param i Row
   * @param j Column
   */
  delete(i: number, j: number): boolean;

  /**
   * @param i Row
   * @param j Column
   * @param value
   */
  set(i: number, j: number, value: T): this;
}

export interface ReadonlyMatrix<T> {
  /**
   * @param i Row
   * @param j Column
   */
  get(i: number, j: number): T | undefined;

  /**
   * @param i Row
   * @param j Column
   */
  has(i: number, j: number): boolean;

  [Symbol.iterator](): IterableIterator<Cell<T>>;
}

export type Cell<T> = {
  /**
   * Row
   */
  i: number;
  /**
   * Column
   */
  j: number;
  value?: T;
};
