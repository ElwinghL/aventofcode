def getDatas():
    with open("./input.txt", "r") as file :
        return [list(map(int, data.split("\n"))) for data in file.read().strip().split("\n\n")]

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

def solver1():
    return max(list(map(lambda x: sumUp(x), getDatas())))

def solver2():
    return sumUp(mySort(list(map(lambda x: sumUp(x), getDatas())), True)[0:3])

print (solver1())
print (solver2())
