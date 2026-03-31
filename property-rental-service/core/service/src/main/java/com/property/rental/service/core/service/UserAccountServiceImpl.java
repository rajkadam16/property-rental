package com.property.rental.service.core.service;

import java.util.HashMap;
import java.util.List;
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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;

@Service("userAccountService")
public class UserAccountServiceImpl implements UserAccountService {

	private static final Logger logger = LoggerFactory.getLogger(UserAccountServiceImpl.class);
	@Autowired
	private UserAccountDao userAccountDao;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Map<String, Object> registerUser(UserAccountEntity user) {
		// Check if email already exists
		Optional<UserAccountEntity> existingUser = userAccountDao.findByEmail(user.getEmail());
		if (existingUser.isPresent()) {
			logger.warn("Registration failed - Email already exists: {}", user.getEmail());
			return Map.of("error", "Email already registered", "message", "An account with this email already exists");
		}

		// Encode password before saving
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		// Assign default USER role
		if (user.getRoles() == null || user.getRoles().isEmpty()) {
			user.setRoles(Collections.singletonList(Role.ROLE_USER.name()));
		}

		userAccountDao.save(user);
		logger.info("User registered successfully: {}", user.getEmail());
		return Map.of("message", "User registered successfully");
	}

	@Override
	public ResponseEntity<?> login(LoginRequest request) {
		logger.info("Login attempt for email: {}", request.getEmail());
		Optional<UserAccountEntity> user = userAccountDao.findByEmail(request.getEmail());

		if (user.isEmpty()) {
			logger.warn("User not found: {}", request.getEmail());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}

		if (passwordEncoder.matches(request.getPassword(), user.get().getPassword())) {
			logger.info("Login successful for: {}", request.getEmail());
			List<String> roles = user.get().getRoles();
			String token = jwtUtil.generateToken(user.get().getEmail(), roles);
			String userId = user.get().getId();
			return ResponseEntity.ok(new LoginResponse(token, userId, roles));
		} else {
			logger.warn("Invalid password for: {}", request.getEmail());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}
	}
}
