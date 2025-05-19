package com.property.rental.service.common.model;

import lombok.Getter;

@Getter
public class LoginResponse {
    private String token;
    private String userId;

    public LoginResponse(String token, String userId) {
        this.token = token;
        this.userId = userId;
    }

    // Getters and Setters
}

