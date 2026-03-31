package com.property.rental.service.common.model;

import java.util.List;

import lombok.Getter;

@Getter
public class LoginResponse {
    private String token;
    private String userId;
    private List<String> roles;
    public LoginResponse(String token, String userId, List<String> roles) {
        this.token = token;
        this.userId = userId;
        this.roles = roles;
    }

    // Getters and Setters
}

