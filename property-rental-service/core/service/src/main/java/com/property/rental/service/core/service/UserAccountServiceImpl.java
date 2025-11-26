package com.property.rental.service.core.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import com.property.rental.service.common.commonutils.JwtUtil;
import com.property.rental.service.common.enums.Role;
import com.property.rental.service.common.model.LoginRequest;
import com.property.rental.service.common.model.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.UserAccountDao;
import com.property.rental.service.core.api.service.UserAccountService;

import com.property.rental.service.common.enity.UserAccountEntity;

import java.util.Collections;

@Service("userAccountService")
public class UserAccountServiceImpl implements UserAccountService {
	//
	@Autowired
	private UserAccountDao userAccountDao;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Map<String, Object> registerUser(UserAccountEntity user) {
		// Encode password before saving
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		// Assign default USER role
		if (user.getRoles() == null || user.getRoles().isEmpty()) {
			user.setRoles(Collections.singletonList(Role.ROLE_USER.name()));
		}

		userAccountDao.save(user);
		return Map.of("message", "User registered successfully");
	}

	@Override
	public ResponseEntity<?> login(LoginRequest request) {
		Optional<UserAccountEntity> user = userAccountDao.findByEmail(request.getEmail());

		if (user.isPresent() && passwordEncoder.matches(request.getPassword(), user.get().getPassword())) {
			String token = jwtUtil.generateToken(user.get().getEmail());
			String userId = user.get().getId(); // make sure getId() exists
			return ResponseEntity.ok(new LoginResponse(token, userId));
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}
	}
}
