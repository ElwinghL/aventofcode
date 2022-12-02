#!/usr/bin/node
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
 * https://adventofcode.com/2022/day/2
 * What would your total score be if everything goes exactly according to your strategy guide?
 */
function solver1() {
  const score = commonGround()
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
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/2#part2
 * Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
 */
function solver2() {
  const score = commonGround()
    .split("\r\n") //We split when there is a linebreak
    .reduce((pSum, line) => pSum + PATTERNS[line], 0);

  return score;
}

/**
 * There is 9 pattern
 * We just adapt the values to the new informations
 */
const PATTERNS = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};
console.warn(solver2());
