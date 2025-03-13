package com.property.rental.service.core.api.service;

import java.util.Map;

import com.property.rental.service.common.enity.UserAccountEntity;

public interface UserAccountService {

	Map<String, String> registerUser(UserAccountEntity userAccount);
	Map<String, String> loginUser(String email, String password);
}