package com.property.rental.service.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.dao.UserAccountDao;
import com.property.rental.service.core.api.service.PropertyDetailService;
import com.property.rental.service.core.api.service.UserAccountService;
import com.property.rental.service.common.model.PropertyDetail;
import com.property.rental.service.common.model.UserAccount;

@Service("userAccountService")
public class UserAccountServiceImpl implements UserAccountService {

	@Autowired
	private UserAccountDao userAccountDao;

	@Override
	public UserAccount getUserAccount(String userID) {
		return this.userAccountDao.getUserAccount(userID);
	}

	@Override
	public List<UserAccount> getAllUserAccounts() {
		return this.userAccountDao.getAllUserAccounts();
	}

	@Override
	public String deleteUserAccount(String userID) {
		return this.userAccountDao.deleteUserAccount(userID);
	}

	@Override
	public String updateUserAccount(UserAccount userAccount) {
		return this.userAccountDao.updateUserAccount(userAccount);
	}

	@Override
	public String createUserAccount(UserAccount userAccount) {
		return this.userAccountDao.createUserAccount(userAccount);
	}

}