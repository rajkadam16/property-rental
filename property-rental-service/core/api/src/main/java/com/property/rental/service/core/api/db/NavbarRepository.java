package com.property.rental.service.core.api.db;

import com.property.rental.service.common.enity.Navbar;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NavbarRepository extends MongoRepository<Navbar, String> {
}
