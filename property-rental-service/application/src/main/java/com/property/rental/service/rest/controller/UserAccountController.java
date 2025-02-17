package com.property.rental.service.rest.controller;

import com.property.rental.service.common.enity.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.core.api.service.UserAccountService;

@RestController
@RequestMapping("account/")
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
	
	@PostMapping("signup")
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

	@PostMapping("login")
	public String login(@RequestParam String email, @RequestParam String password) {
		return userAccountService.login(email, password);
	}
}
