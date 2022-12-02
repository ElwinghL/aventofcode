#!/usr/bin/node
import fs from "fs";

/**
 * https://adventofcode.com/2022/day/2
 * @returns The total score you're supposed to make
 */
function solver1() {
  const fileStr = fs.readFileSync("./input.txt", "utf-8", (err, data) => {
    if (err) return console.error(err);
    return data;
  });

  const score = fileStr
    .trim() //We remove the last line
    .split("\r\n") //We split when there is a linebreak
    .reduce((pSum, line) => pSum + POINTS[line], 0);

  return score;
}
/**
 * There is 9 pattern
 * Here they are, we manually calculated each one (not that hard)
 */
const POINTS = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};
console.warn(solver());
