package com.property.rental.service.core.api.dao;

import java.util.Optional;

import com.property.rental.service.common.enity.UserAccountEntity;

public interface UserAccountDao {

	Optional<UserAccountEntity> findByEmail(String email);
	UserAccountEntity save(UserAccountEntity user);

}
