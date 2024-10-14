package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.model.UserAccount;

public interface UserAccountDao {

	public UserAccount getUserAccount(String userID);

	public List<UserAccount> getAllUserAccounts();

	public String deleteUserAccount(String userID);

	public String updateUserAccount(UserAccount userAccount);

	public String createUserAccount(UserAccount userAccount);

}
