package com.property.rental.service.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.property.rental.service.common.model.UserAccount;
import com.property.rental.service.core.api.service.UserAccountService;

@RestController
@RequestMapping("useraccount")
public class UserAccountController {

	@Autowired
	private UserAccountService userAccountService;
	
	@GetMapping("{userID}")
	public Object getPropertyDetail(String userID) {
		return userAccountService.getUserAccount(userID);
	}
	
	@GetMapping("/details")
	public Object getAllPropertyDetails(String propertyID) {
		return userAccountService.getAllUserAccounts();
	}
	
	@PostMapping("/add")
	public Object addPropertyDetail(@RequestBody UserAccount userAccount) {
		return userAccountService.createUserAccount(userAccount);
	}
	
	@PutMapping("/update")
	public Object updatePropertyDetail(@RequestBody UserAccount userAccount) {
		return userAccountService.updateUserAccount(userAccount);
	}
	
	@DeleteMapping("/delete")
	public Object deletePropertyDetail( String userID) {
		return userAccountService.deleteUserAccount(userID);
	}
	

}
