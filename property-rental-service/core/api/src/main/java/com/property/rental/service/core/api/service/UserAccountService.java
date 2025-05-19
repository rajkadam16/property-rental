package com.property.rental.service.core.api.service;

import java.util.Map;

import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.common.model.LoginRequest;
import org.springframework.http.ResponseEntity;

public interface UserAccountService {
    Map<String, Object> registerUser(UserAccountEntity userAccount);
    ResponseEntity<?> login(LoginRequest request);
}