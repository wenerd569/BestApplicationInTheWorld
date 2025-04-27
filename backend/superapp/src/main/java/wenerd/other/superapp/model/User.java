package wenerd.other.superapp.model;

import java.io.File;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
    public long id;
    public String name;
    public String shurename;
    public String avatarPath;
    public Coordinate coordinate;
}
