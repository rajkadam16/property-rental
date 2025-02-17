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
		userAccountRepo.save(userAccount);
		return "created";
	}

	@Override
	public String login(String email, String password) {
		Optional<UserAccountEntity> userOptional = userAccountRepo.findByEmail(email);

		if (userOptional.isPresent()) {
			UserAccountEntity user = userOptional.get();

			if (user.getPassword().equals(password)) {
				return "Login successful!";
			} else {
				return "Invalid password!";
			}
		} else {
			return "User not found!";
		}
	}


}

