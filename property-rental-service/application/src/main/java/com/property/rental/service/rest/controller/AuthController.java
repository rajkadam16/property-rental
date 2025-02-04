package com.property.rental.service.rest.controller;

import com.property.rental.service.core.service.AuthService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("/signup")
    public String register(@RequestBody Map<String, String> request) {
        return authService.registerUser(request.get("username"), request.get("email"), request.get("password"));
    }
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> request) {
        return authService.loginUser(request.get("email"), request.get("password"));
    }
}
