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
/**
 * https://adventofcode.com/2022/day/3#part2
 * Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
 */
function solver2() {
  const backpacks = commonGround().split("\r\n"); //We split when there is a linebreak

  const score = recurseCount(0, backpacks);
  return score;
}
/**
 * Count the sum of the priorityToken of each 3 elves group
 * @param {Number} count The iterative count
 * @param {Array[String]} list The backpacks
 */
function recurseCount(count, list) {
  if (list.length == 0) return count;
  //We separate or list with the spread op
  const [firstElf, secondElf, thirdElf, ...otherElves] = list;
  for (let first = 0; first < firstElf.length; ++first) {
    for (let second = 0; second < secondElf.length; ++second) {
      for (let third = 0; third < thirdElf.length; ++third) {
        //we go in our three backpacks and find the common elem, one's it's found, we just keep recursing
        if (
          firstElf[first] == secondElf[second] &&
          firstElf[first] == thirdElf[third]
        )
          return recurseCount(count + ABCD[firstElf[first]], otherElves);
      }
    }
  }
  //For security if our loop didn't get through
  return recurseCount(count, otherElves);
}
console.warn(solver2());
