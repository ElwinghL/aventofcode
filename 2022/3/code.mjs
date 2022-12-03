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
 * To get our letter priority
 */
function buildABC() {
  let ret = {};
  const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < abc.length; ++i) {
    ret[abc[i]] = i + 1;
  }

  return ret;
}

const ABCD = buildABC();

/**
 * https://adventofcode.com/2022/day/3
 * Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
 */
function solver1() {
  const score = commonGround()
    .split("\r\n") //We split when there is a linebreak
    .reduce((pSum, line) => {
      let arrayOfLetter = [...line];
      const m = Math.floor(arrayOfLetter.length / 2);
      const [leftSide, rightSide] = [
        arrayOfLetter.slice(0, m),
        arrayOfLetter.slice(m, arrayOfLetter.length),
      ];
      for (let cLeft = 0; cLeft < leftSide.length; ++cLeft) {
        // We iterate on the first left and on the right to get the common letters and there index
        for (let cRight = 0; cRight < rightSide.length; ++cRight) {
          if (leftSide[cLeft] == rightSide[cRight]) {
            // We do our sum with the item prioriry
            return pSum + ABCD[leftSide[cLeft]];
          }
        }
      }
    }, 0);

  return score;
}
console.warn(solver1());
