/**
 * 
 */
package com.property.rental.service.core.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.property.rental.service.common.model.UserAccount;
import com.property.rental.service.core.api.dao.UserAccountDao;

@Repository("userAccountDao")
public class UserAccountDaoImpl implements UserAccountDao {

	@Override
	public UserAccount getUserAccount(String userID) {
		return new UserAccount();
	}

	@Override
	public List<UserAccount> getAllUserAccounts() {
		return new ArrayList<UserAccount>();
	}

	@Override
	public String deleteUserAccount(String userID) {
		return userID;
	}

	@Override
	public String updateUserAccount(UserAccount userAccount) {
		return "updated";
	}

	@Override
	public String createUserAccount(UserAccount userAccount) {
		return "created";
	}

}
