/**
 * 
 */
package com.property.rental.service.core.dao;


import java.util.List;
import java.util.Optional;
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
		return userAccountRepo.findById(userID).orElse(null);
	}

	@Override
	public List<UserAccountEntity> getAllUserAccounts() {
		return userAccountRepo.findAll();
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
		// Check if email already exists
		if (userAccountRepo.findByEmail(userAccount.getEmail()).isPresent()) {
			return "Email already registered!";
		}
		userAccountRepo.save(userAccount);
		return "Account created successfully!";
	}

	@Override
	public String login(String email, String password) {
		return "";
	}

}

