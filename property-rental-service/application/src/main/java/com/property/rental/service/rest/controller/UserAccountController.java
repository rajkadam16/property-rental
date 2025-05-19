package com.property.rental.service.rest.controller;

import com.property.rental.service.common.commonutils.JwtUtil;
import com.property.rental.service.common.model.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.core.api.service.UserAccountService;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/account")
public class UserAccountController {

@Autowired
private UserAccountService userAccountService;
	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/signup")
	public ResponseEntity<Map<String, Object>> registerUser(@RequestBody UserAccountEntity userAccount) {
		return ResponseEntity.ok(userAccountService.registerUser(userAccount));
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest request) {
		return  userAccountService.login(request);
	}
}
