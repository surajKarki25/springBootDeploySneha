package com.sneha.lovenote;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class LoveController {
    @GetMapping("/api/love")
    public Map<String, String> loveMessage() {
        return Map.of(
            "name", "Sneha",
            "message", "You make ordinary moments feel magical. I'm lucky to have you. 💗"
        );
    }
}
