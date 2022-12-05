#!/usr/bin/node
import fs from "fs";
/**
 * @returns The parsed input
 */
function commonGround() {
  let [crates, instructions] = fs
    .readFileSync("./input.txt", "utf-8", (err, data) => {
      if (err) return console.error(err);
      return data;
    })
    .trim()
    .split("\r\n\r\n"); //First array is the crates, second is instructions

  //Get all instructions lines by line
  instructions = instructions.split("\r\n").map((a) =>
    a
      .replaceAll("move", "")
      .replace(/(from|to)/g, ",")
      .split(",")
      .map(Number)
  );

  //processing the crates
  let cratesPiles = {};
  crates = crates.split("\r\n").reverse();
  let size = crates.shift().trim().split("   ").length;
  for (let i = 1; i <= size; ++i) cratesPiles[i] = [];
  crates.map((line, index) => {
    line += " ";
    let step = line.length / size;
    for (let i = 0; i < line.length / step; ++i) {
      let letter = line
        .slice(i * step, (i + 1) * step)
        .replace(/[\[\]]/g, "")
        .trim();
      if (letter != "") cratesPiles[i + 1].push(letter);
    }
  });

  return [cratesPiles, instructions];
}

/**
 * https://adventofcode.com/2022/day/5
 * After the rearrangement procedure completes, what crate ends up on top of each stack?
 */
function solver1() {
  let [cratesPiles, instructions] = commonGround();

  instructions.forEach(([move, from, to]) => {
    for (let i = 0; i < move; ++i)
      cratesPiles[to].push(cratesPiles[from].pop());
  });

  return Object.keys(cratesPiles)
    .map((a) => cratesPiles[a].pop())
    .join("");
}
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/5#part2
 * After the rearrangement procedure completes, what crate ends up on top of each stack?
 */
function solver2() {
  let [cratesPiles, instructions] = commonGround();

  instructions.forEach(([move, from, to]) => {
    let tempPile = [];
    for (let i = 0; i < move; ++i) tempPile.push(cratesPiles[from].pop());
    cratesPiles[to].push(...tempPile.reverse());
  });

  return Object.keys(cratesPiles)
    .map((a) => cratesPiles[a].pop())
    .join("");
}
console.warn(solver2());
