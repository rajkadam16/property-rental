package com.property.rental.service.common.enity;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
