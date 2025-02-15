package com.property.rental.service.core.api.service;

import java.util.List;

import com.property.rental.service.common.enity.UserAccountEntity;

public interface UserAccountService {

    public UserAccountEntity getUserAccount(String userID);
	
	public List<UserAccountEntity> getAllUserAccounts();
	
	public String deleteUserAccount(String userID);

	public String updateUserAccount(UserAccountEntity userAccount);

	public String createUserAccount(UserAccountEntity userAccount);

//	public UserAccountEntity login(String emailAddress, String password);

}