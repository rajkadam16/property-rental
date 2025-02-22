package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.enity.UserAccountEntity;

public interface UserAccountDao {

	public UserAccountEntity getUserAccount(String userID);

	public List<UserAccountEntity> getAllUserAccounts();

	public String deleteUserAccount(String userID);

	public String updateUserAccount(UserAccountEntity userAccount);

	public String createUserAccount(UserAccountEntity userAccount);

	public String login(String email, String password);

}
