package com.property.rental.service.core.service;

import java.util.List;
import java.util.Optional;

import com.property.rental.service.core.api.db.UserAccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.UserAccountDao;
import com.property.rental.service.core.api.service.UserAccountService;

import com.property.rental.service.common.enity.UserAccountEntity;

@Service("userAccountService")
public class UserAccountServiceImpl implements UserAccountService {

	@Autowired
	private UserAccountRepo userAccountRepo;

	@Autowired
	private UserAccountDao userAccountDao;

	@Override
	public UserAccountEntity getUserAccount(String userID) {
		return this.userAccountDao.getUserAccount(userID);
	}

	@Override
	public List<UserAccountEntity> getAllUserAccounts() {
		return this.userAccountDao.getAllUserAccounts();
	}

	@Override
	public String deleteUserAccount(String userID) {
		return this.userAccountDao.deleteUserAccount(userID);
	}

	@Override
	public String updateUserAccount(UserAccountEntity userAccount) {
		return this.userAccountDao.updateUserAccount(userAccount);
	}

	@Override
	public String createUserAccount(UserAccountEntity userAccount) {
		return this.userAccountDao.createUserAccount(userAccount);
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
