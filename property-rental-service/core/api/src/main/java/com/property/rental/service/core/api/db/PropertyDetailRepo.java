package com.property.rental.service.core.api.db;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.property.rental.service.common.enity.PropertyDataEntity;

import java.util.List;

public interface PropertyDetailRepo extends MongoRepository<PropertyDataEntity, String> {
    List<PropertyDataEntity> findByUserId(String userId); // Fetch properties by user ID
}
