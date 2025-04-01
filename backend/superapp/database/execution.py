import database
import database.decl

import json


input();

def compareCoord(a: tuple[float, float], b: tuple[float, float]):
    n = 10
    if ((a[0] - b[0])**2 + (a[1] - b[1])**2)**0.5 < 10:
        return True
    return False

def retUser(user: database.decl.User):
    print(json.dump(user.to_dict()))

def getOfCoord():
    coordinate = input()
    x, y = coordinate.split()
    a = (float(x), float(y))
    for x in database.data:
        if compareCoord(a, x.coordinate):
            retUser(x)
            
def getOfId():
    id = input()
    retUser(database.data[id])