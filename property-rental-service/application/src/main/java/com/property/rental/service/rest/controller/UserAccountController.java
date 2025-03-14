package com.property.rental.service.rest.controller;

import com.property.rental.service.common.model.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.core.api.service.UserAccountService;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/account")
public class UserAccountController {

	@Autowired
	private UserAccountService userAccountService;

	@PostMapping("/signup")
	public Map<String, String> registerUser(@RequestBody UserAccountEntity userAccount) {
		return userAccountService.registerUser(userAccount);
	}

	
@PostMapping("/login")
public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest loginRequest) {
	Map<String, String> daoResponse = userAccountService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());

	Map<String, Object> response = new HashMap<>();
	response.put("success", daoResponse.get("userId") != null);
	response.put("message", daoResponse.get("message"));
	response.put("userId", daoResponse.get("userId"));

	return ResponseEntity.ok(response);
}

}
