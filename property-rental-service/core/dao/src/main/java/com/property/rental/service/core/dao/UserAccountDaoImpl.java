/**
 * 
 */
package com.property.rental.service.core.dao;

import java.util.ArrayList;
import java.util.List;

import com.property.rental.service.core.api.db.UserAccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.core.api.dao.UserAccountDao;

@Repository("userAccountDao")
public class UserAccountDaoImpl implements UserAccountDao {
	@Autowired
	private UserAccountRepo userAccountRepo;

	@Override
	public UserAccountEntity getUserAccount(String userID) {
		return new UserAccountEntity();
	}

	@Override
	public List<UserAccountEntity> getAllUserAccounts() {
		return new ArrayList<UserAccountEntity>();
	}

	@Override
	public String deleteUserAccount(String userID) {
		return userID;
	}

	@Override
	public String updateUserAccount(UserAccountEntity userAccount) {
		return "updated";
	}

	@Override
	public String createUserAccount(UserAccountEntity userAccount) {
		userAccountRepo.save(userAccount);
		return "created";

	}

}
