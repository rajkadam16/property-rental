package com.property.rental.service.core.api.db;

import com.property.rental.service.common.enity.UserAccountEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserAccountRepo extends MongoRepository<UserAccountEntity, String> {
//    UserAccountEntity findByEmail(String emailAddress);
}
