package com.property.rental.service.core.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
	public Map<String, String> registerUser(UserAccountEntity userAccount) {
		return userAccountDao.registerUser(userAccount);
	}

	@Override
	public Map<String, String> loginUser(String email, String password) {
		return userAccountDao.loginUser(email, password);
	}

}
