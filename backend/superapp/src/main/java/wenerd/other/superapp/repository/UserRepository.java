package wenerd.other.superapp.repository;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import wenerd.other.superapp.model.Coordinate;
import wenerd.other.superapp.model.User;
import wenerd.other.superapp.wtf.PythonExecutor;


@Repository
public class UserRepository {
    private String databasePath = "database/database.py";
    private String execPyPath = "database/execution.py";
    private PythonExecutor pythonExecutor;
    
    private String firstPart = "from decl import *\r\n" + //
                "\r\n" + //
                "\r\n" + //
                "data = {\n";

    private String midleForm = "%1$s: User(%1$s, \"%2$s\", \"%3$s\", \"%4$s\", (%5$s, %6$s)),";
    private String formAppend = "data[%1$s] = User(%1$s, \"%2$s\", \"%3$s\", \"%4$s\", (%5$s, %6$s))\n";

    List<User> users;


    public UserRepository(){
        users = new ArrayList<>();
        pythonExecutor = new PythonExecutor(execPyPath);
    }

    public List<User> getUsers(){
        return users;
    }
    
    public List<User> getUsersByCoord(Coordinate coordinate){
        return pythonExecutor.getUsersByCoord(coordinate);
    }






    public void saveUser(User u){
        try (FileWriter writer = new FileWriter(databasePath, true)) {
            writer.write(String.format(formAppend, u.id, u.name, u.shurename, u.avatarPath, u.coordinate.x, u.coordinate.y));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    protected void saveAllUsers(){
        try (FileWriter writer = new FileWriter(databasePath)) {
            writer.write(firstPart);
            for (User u : users){
                writer.write(String.format(midleForm, u.id, u.name, u.shurename, u.avatarPath, u.coordinate.x, u.coordinate.y));
            }
            writer.write("\n}\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
