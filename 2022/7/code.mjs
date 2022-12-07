#!/usr/bin/node
/** @format */

import fs from "fs";

let currentDir = "/";
let arbo = {
  "/": { name: "/", size: 0, parent: "/", fileList: {}, isRoot: true },
};

/**
 * @returns The parsed input
 */
function commonGround() {
  const log = fs
    .readFileSync("./input.txt", "utf-8", (err, data) => {
      if (err) return console.error(err);
      return data;
    })
    .trim()
    .split("\n");

  log.map(parseLine);
}
/**
 * Parse a line
 */
function parseLine(line) {
  const [first, ...rest] = line.split(" ");
  if (first == "$") return parseInstr(...rest);
  if (first == "dir") return parseDir(...rest);
  return parseFile(first, ...rest);
}
/**
 * Parse an instruction and do appropriate stuff with it
 */
function parseInstr(instr, arg = null) {
  if (instr == "cd") {
    let path = arbo[currentDir].parent;
    if (arg == "..") return changeDir(path);
    if (arg == "/") return changeDir("/");
    return changeDir(currentDir + "_" + arg);
  }
  if (instr == "ls") return; //No effect
}
/**
 * Change current directory
 */
function changeDir(dir) {
  currentDir = dir;
  return;
}
/**
 * Parse a file and do appropriate stuff with it
 */
function parseFile(size, fullName) {
  size = parseInt(size);
  const [name, ext] = fullName.split(".");
  let currDir = arbo[currentDir];
  if (currDir.fileList[name] == null) {
    currDir.fileList[name] = { type: ext, size: size };
    processSizes(currentDir, size);
  }
  return;
}
/**
 * Parse a dir and do appropriate stuff with it
 */
function parseDir(name) {
  if (arbo[currentDir + "_" + name] == null)
    return (arbo[currentDir + "_" + name] = {
      size: 0,
      parent: currentDir,
      fileList: {},
      isRoot: false,
      name: name,
    });
  return;
}
/**
 * Update parent directorues' sizes
 */
function processSizes(parent, size) {
  arbo[parent].size += size;
  if (!arbo[parent].isRoot) return processSizes(arbo[parent].parent, size);
}
/**
 * https://adventofcode.com/2022/day/7
 * Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?
 */
function solver1() {
  return Object.keys(arbo)
    .map((key) => arbo[key])
    .filter((dir) => dir.size <= 100000 && !dir.isRoot)
    .reduce((pSum, a) => pSum + a.size, 0);
}
commonGround();
console.warn(solver1());
/**
 * https://adventofcode.com/2022/day/7#part2
 * Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?
 */
function solver2() {
  let freeSpace = 70000000 - arbo["/"].size;
  const threshold = 30000000 - freeSpace;
  const filtered = Object.keys(arbo)
    .map((key) => arbo[key])
    .filter((dir) => dir.size >= threshold)
    .sort((a, b) => a.size - b.size);
  console.log({ freeSpace, threshold, filtered });
}
console.warn(solver2());
fs.writeFileSync("res.json", JSON.stringify(arbo));
