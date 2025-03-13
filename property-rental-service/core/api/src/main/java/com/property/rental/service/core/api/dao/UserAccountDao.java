package com.property.rental.service.core.api.dao;

import java.util.List;
import java.util.Map;

import com.property.rental.service.common.enity.UserAccountEntity;

public interface UserAccountDao {

Map<String, String> registerUser(UserAccountEntity userAccount);
	Map<String, String> loginUser(String email, String password);

}
