package com.property.rental.service.core.api.db;

import com.property.rental.service.common.enity.UserAccountEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserAccountRepo extends MongoRepository<UserAccountEntity, String> {
    Optional<UserAccountEntity> findByEmail(String email);
}
