#!/usr/bin/node
/** @format */

import fs from "fs";
/**
 * @returns The parsed input
 */
function commonGround(n = 4) {
  const dataStream = fs
    .readFileSync("./input.txt", "utf-8", (err, data) => {
      if (err) return console.error(err);
      return data;
    })
    .trim()
    .split("");
  let index = 0;
  let datas = dataStream.slice(index, n);
  let set = new Set(datas);
  while (set.size < n) {
    datas = dataStream.slice(++index, index + n);
    set = new Set(datas);
  }

  return index + n;
}

/**
 * https://adventofcode.com/2022/day/6
 * How many characters need to be processed before the first start-of-packet marker is detected?
 */
function solver1() {
  return commonGround(4);
}
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/6#part2
 * How many characters need to be processed before the first start-of-message marker is detected?
 */
function solver2() {
  return commonGround(14);
}
console.warn(solver2());
