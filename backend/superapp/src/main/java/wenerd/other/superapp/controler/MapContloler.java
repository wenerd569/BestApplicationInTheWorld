package wenerd.other.superapp.controler;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import wenerd.other.superapp.model.MapUserData;
import wenerd.other.superapp.service.MapService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@AllArgsConstructor
@RestController
@RequestMapping("/api/map/")
public class MapContloler {

    MapService mapService;

    @GetMapping
    public List<MapUserData> loadMap() {
        return mapService.getAllMapUser();
    }
    
}
