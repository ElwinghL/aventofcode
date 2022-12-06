#!/usr/bin/node
/** @format */

import fs from "fs";
/**
 * @returns The parsed input
 */
function commonGround() {
  return fs
    .readFileSync("./input.txt", "utf-8", (err, data) => {
      if (err) return console.error(err);
      return data;
    })
    .trim();
}

/**
 * https://adventofcode.com/2022/day/6
 * How many characters need to be processed before the first start-of-packet marker is detected?
 */
function solver1() {
  const dataStream = commonGround();
  let [a, b, c, d, ...rest] = dataStream.split("");
  let set = new Set([a, b, c, d]);
  while (set.size < 4) {
    [a, b, c, d, ...rest] = [b, c, d, ...rest];
    set = new Set([a, b, c, d]);
  }

  return dataStream.indexOf([a, b, c, d].join("")) + 4;
}
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/6#part2
 * How many characters need to be processed before the first start-of-message marker is detected?
 */
function solver2() {
  const dataStream = commonGround();
  let [a, b, c, d, e, f, g, h, i, j, k, l, m, n, ...rest] =
    dataStream.split("");
  let set = new Set([a, b, c, d, e, f, g, h, i, j, k, l, m, n]);
  while (set.size < 14) {
    [a, b, c, d, e, f, g, h, i, j, k, l, m, n, ...rest] = [
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      ...rest,
    ];
    set = new Set([a, b, c, d, e, f, g, h, i, j, k, l, m, n]);
  }

  return (
    dataStream.indexOf([a, b, c, d, e, f, g, h, i, j, k, l, m, n].join("")) + 14
  );
}
console.warn(solver2());
