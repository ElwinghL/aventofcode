# In order to have out function everywhere
import sys
import os
sys.path.append(os.path.abspath("../__util__/"))
from util import sumUp

def getDatas():
    with open("./input.txt", "r") as file :
        return file.read().strip().split("\n");

pattern1 = {"A X": 4,"A Y": 8,"A Z": 3,"B X": 1,"B Y": 5,"B Z": 9,"C X": 7,"C Y": 2,"C Z": 6,}
pattern2 = {"A X": 3,"A Y": 4,"A Z": 8,"B X": 1,"B Y": 5,"B Z": 9,"C X": 2,"C Y": 6,"C Z": 7,}

def solver1():
    return sumUp(list(map(lambda x: pattern1.get(x), getDatas())))

def solver2():
    return sumUp(list(map(lambda x: pattern2.get(x), getDatas())))

"""
 888                                                      888 888             888
 888                                                      888 888             888
 888                                                      888 888             888
 888      .d88b.  .d8888b       888d888 .d8888b  888  888 888 888888  8888b.  888888 .d8888b
 888     d8P  Y8b 88K           888P"   88K      888  888 888 888        "88b 888    88K
 888     88888888 "Y8888b.      888     "Y8888b. 888  888 888 888    .d888888 888    "Y8888b.
 888     Y8b.          X88      888          X88 Y88b 888 888 Y88b.  888  888 Y88b.       X88
 88888888 "Y8888   88888P'      888      88888P'  "Y88888 888  "Y888 "Y888888  "Y888  88888P'

"""

print (solver1())
print (solver2())
