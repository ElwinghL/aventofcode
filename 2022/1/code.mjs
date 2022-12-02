#!/usr/bin/node
import fs from "fs";

/**
 * Sum up an array of number
 * @returns The sum of this array
 */
Array.prototype.sum = function () {
  return this.reduce((pSum, a) => pSum + parseInt(a, 10), 0);
};
/**
 * Get the total of calories transported by each elves
 * @returns The datas used by both parts
 */
function commonGround() {
  const fileStr = fs.readFileSync("./input.txt", "utf-8", (err, data) => {
    if (err) return console.error(err);
    return data;
  });

  const datas = fileStr
    .trim() //We remove the last line return to avoid having an empty hand elf
    .split("\r\n\r\n") //We split when there is 2 linebreak
    .map((elem) => elem.split("\r\n").sum()); //Then we sum up calories for each elf

  return datas;
}
/**
 * https://adventofcode.com/2022/day/1
 * Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
 */
function solver1() {
  const datas = commonGround();
  return Math.max(...datas);
}
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/1#part2
 * Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
 */
function solver2() {
  const datas = commonGround();
  //We sort our list
  const [first, second, third, _] = datas.sort((a, b) => b - a);

  return [first, second, third].sum();
}
console.warn(solver2());
