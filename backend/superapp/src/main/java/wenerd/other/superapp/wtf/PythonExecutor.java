package wenerd.other.superapp.wtf;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

import wenerd.other.superapp.model.Coordinate;
import wenerd.other.superapp.model.User;

public class PythonExecutor {
    private String path;
    public PythonExecutor(String path){
        this.path = path;
    }
    public List<User> getUsersByCoord(Coordinate coordinate) {
        List<User> res = new ArrayList<>();
        try {
            String command = "python " + path;

            Process process = Runtime.getRuntime().exec(command);

            BufferedWriter writer = process.outputWriter();
            writer.write("getUsersByCoord");
            writer.write(String.format("%1$s %2$s", coordinate.x, coordinate.y));

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            ObjectMapper objectMapper = new ObjectMapper();

            while ((line = reader.readLine()) != null) {
                User user = objectMapper.readValue(line, User.class);
                res.add(user);
            }

            int exitCode = process.waitFor();
            System.out.println("Процесс завершен с кодом: " + exitCode);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }
}