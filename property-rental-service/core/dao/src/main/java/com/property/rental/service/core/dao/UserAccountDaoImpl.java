/**
 * 
 */
package com.property.rental.service.core.dao;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
	public Map<String, String> registerUser(UserAccountEntity userAccount) {
		Map<String, String> response = new HashMap<>();

		// Check if email already exists
		if (userAccountRepo.findByEmail(userAccount.getEmail()).isPresent()) {
			response.put("message", "Email already registered!");
			response.put("userId", null);
			return response;
		}

		UserAccountEntity newUser = userAccountRepo.save(userAccount);
		response.put("message", "Account created successfully!");
		response.put("userId", newUser.getId());

		return response;
	}

	@Override
	public Map<String, String> loginUser(String email, String password) {
		Map<String, String> response = new HashMap<>();
		Optional<UserAccountEntity> userOptional = userAccountRepo.findByEmail(email);

		if (userOptional.isPresent()) {
			UserAccountEntity user = userOptional.get();
			if (user.getPassword().equals(password)) {
				response.put("message", "Login successful!");
				response.put("userId", user.getId());
			} else {
				response.put("message", "Invalid password!");
				response.put("userId", null);
			}
		} else {
			response.put("message", "User not found!");
			response.put("userId", null);
		}

		return response;
	}

}

