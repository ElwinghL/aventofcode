# In order to have out function everywhere
import sys
import os
sys.path.append(os.path.abspath("../__util__/"))
from util import sumUp

def getDatas():
    with open("./input.txt", "r") as file :
        return file.read().strip().split("\n");

def getPoint(char):
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".find(char) + 1

def solver1():
    return sumUp(list(map(lambda x: getPoint(set(x[:len(x)//2]).intersection(set(x[len(x)//2:])).pop()), getDatas())))

def solver2():
    rawDatas = getDatas()
    groupedDatas = list()
    i = 0
    while i < len(rawDatas):
        groupedDatas.append(getPoint(set(rawDatas[i]).intersection(set(rawDatas[i+1])).intersection(set(rawDatas[i+2])).pop()))
        i += 3

    return sumUp(groupedDatas)

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
