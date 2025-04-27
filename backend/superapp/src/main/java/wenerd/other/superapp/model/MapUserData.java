package wenerd.other.superapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class MapUserData {
    public long id;
    public String avatarPath;
    public String name;
    public Coordinate coordinate;
}
