package com.property.rental.service.core.api.db;

import com.property.rental.service.common.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserAccountRepo extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}