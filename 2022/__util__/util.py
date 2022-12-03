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
