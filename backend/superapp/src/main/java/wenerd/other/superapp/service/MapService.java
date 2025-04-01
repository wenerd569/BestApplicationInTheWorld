package wenerd.other.superapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import wenerd.other.superapp.model.MapUserData;
import wenerd.other.superapp.model.User;
import wenerd.other.superapp.repository.UserRepository;

@Service
@AllArgsConstructor
public class MapService {
    UserRepository repository;

    public List<MapUserData> getAllMapUser(){
        List<MapUserData> res = new ArrayList<>();
        for (User u : repository.getUsers()) {
            res.add(new MapUserData(u.id, u.name,u.avatarPath, u.coordinate));
        }
        return res;
    }
}