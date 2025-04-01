
class User:
    def __init__(self, _id, _name, _shurename, _avatarPath, _coordinate):
        self.avatarPath = _avatarPath
        self.id = _id
        self.name = _name
        self.shurename = _shurename
        self.coordinate = _coordinate
        
    id: int
    name: str
    shurename: str
    avatarPath: str
    coordinate: tuple[float, float]

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "shurename": self.shurename,
            "avatarPath": self.avatarPath,
            "coordinate": {"x": self.coordinate[0], "y": self.coordinate[1]}
        }