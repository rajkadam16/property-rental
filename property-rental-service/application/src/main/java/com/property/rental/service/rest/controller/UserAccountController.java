package com.property.rental.service.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
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


	@GetMapping("getAll")
	public Object getUserAll() {
		return userAccountService.getAllUserAccounts();
	}

	@GetMapping("get/{userId}")
	public Object getUser(@PathVariable String userId) {
		return userAccountService.getUserAccount(userId);
	}
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/signup")
	public Object signup(@RequestBody UserAccountEntity userAccount) {
		return userAccountService.createUserAccount(userAccount);
	}

	@PutMapping("update")
	public Object updateUser(@RequestBody UserAccountEntity userAccount) {
		return userAccountService.updateUserAccount(userAccount);
	}
	
	@DeleteMapping("delete/{userId}")
	public Object deleteUser(@PathVariable String userId) {
		return userAccountService.deleteUserAccount(userId);
	}
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/login")
	public String login(@RequestBody Map<String, String> loginRequest) {
		String email = loginRequest.get("email");
		String password = loginRequest.get("password");

		if (email == null || password == null) {
			return "Email and Password are required!";
		}

		return userAccountService.login(email, password);
	}
}
