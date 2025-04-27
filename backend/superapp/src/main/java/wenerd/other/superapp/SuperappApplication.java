package wenerd.other.superapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import wenerd.other.superapp.model.Coordinate;
import wenerd.other.superapp.model.User;
import wenerd.other.superapp.repository.UserRepository;

@SpringBootApplication
public class SuperappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SuperappApplication.class, args);
		var repository = new UserRepository();
		repository.saveUser(new User(0, "dsd", "sd", "sdsd", new Coordinate(23, 23)));
	}
}
