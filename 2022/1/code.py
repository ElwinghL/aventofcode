def getDatas():
    with open("./input.txt", "r") as file :
        return [list(map(int, data.split("\n"))) for data in file.read().strip().split("\n\n")]

def solver1():
    return max(list(map(lambda x: sumUp(x), getDatas())))

def solver2():
    return sumUp(mySort(list(map(lambda x: sumUp(x), getDatas())), True)[0:3])

print (solver1())
print (solver2())

"""

 888b     d888                                      888    888                    888
 8888b   d8888                                      888    888                    888
 88888b.d88888                                      888    888                    888
 888Y88888P888  .d88b.  .d8888b       88888b.d88b.  888888 88888b.   .d88b.   .d88888  .d88b.  .d8888b
 888 Y888P 888 d8P  Y8b 88K           888 "888 "88b 888    888 "88b d88""88b d88" 888 d8P  Y8b 88K
 888  Y8P  888 88888888 "Y8888b.      888  888  888 888    888  888 888  888 888  888 88888888 "Y8888b.
 888   "   888 Y8b.          X88      888  888  888 Y88b.  888  888 Y88..88P Y88b 888 Y8b.          X88
 888       888  "Y8888   88888P'      888  888  888  "Y888 888  888  "Y88P"   "Y88888  "Y8888   88888P'



Allez savoir pourquoi c'est si compliquer d'importer depuis un autre fichier dans python...
"""
def sumUp(l, sum = 0):
    for elem in l:
        sum += elem
    return sum

def sumUpListofList(l, sum = 0):
    for subL in l:
        sum += sumUp(subL)
    return sum

def mySort(l, isReversed = False):
    l.sort(reverse = isReversed)
    return l
