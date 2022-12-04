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
    .trim()
    .split("\r\n");
}

/**
 * https://adventofcode.com/2022/day/4
 * In how many assignment pairs does one range fully contain the other?
 */
function solver1() {
  const count = commonGround()
    .map((a) => a.split(",")) //We seperate each part
    .reduce((pSum, [left, right]) => {
      //First we parse our line
      let [infLeft, supLeft] = left.split("-").map((x) => parseInt(x));
      let [infRight, supRight] = right.split("-").map((x) => parseInt(x));
      //Then we compare our thresholds
      if (
        (infLeft <= infRight && supLeft >= supRight) ||
        (infRight <= infLeft && supRight >= supLeft)
      )
        return ++pSum;
      return pSum;
    }, 0);

  return count;
}
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/4#part2
 * In how many assignment pairs do the ranges overlap?
 */
function solver2() {
  const count = commonGround()
    .map((a) => a.split(",")) //We seperate each part
    .reduce((pSum, [left, right]) => {
      //First we parse our line
      let [infLeft, supLeft] = left.split("-").map((x) => parseInt(x));
      let [infRight, supRight] = right.split("-").map((x) => parseInt(x));
      //We sort our list so that we can easily compare our ranges
      let [s1, s2, s3, s4] = [infLeft, infRight, supLeft, supRight].sort(
        (a, b) => a - b
      );
      //Then we compare our thresholds
      if (
        (s1 == infLeft && s2 != supLeft) ||
        (s1 == infRight && s2 != supRight) ||
        s2 == s3
      )
        return ++pSum;
      return pSum;
    }, 0);

  return count;
}
console.warn(solver2());
