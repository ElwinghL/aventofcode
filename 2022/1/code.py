# In order to have out function everywhere
import sys
import os
sys.path.append(os.path.abspath("../__util__/"))
from util import *

def getDatas():
    with open("./input.txt", "r") as file :
        return [list(map(int, data.split("\n"))) for data in file.read().strip().split("\n\n")]

def solver1():
    return max(list(map(lambda x: sumUp(x), getDatas())))

def solver2():
    return sumUp(mySort(list(map(lambda x: sumUp(x), getDatas())), True)[0:3])

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
