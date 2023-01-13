import {Transform} from "./Transform";

export function createClockwiseTurn(
  height: number,
  width: number,
): Transform {
  return (i, j) => [width - 1 - j, i];
}

export function createCounterclockwiseTurn(
  height: number,
  width: number,
): Transform {
  return (i, j) => [j, height - 1 - i];
}

export function createOverturn(
  height: number,
  width: number,
): Transform {
  return (i, j) => [height - 1 - i, width - 1 - j];
}
