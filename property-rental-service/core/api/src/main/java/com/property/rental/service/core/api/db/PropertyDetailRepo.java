package com.property.rental.service.core.api.db;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.property.rental.service.common.enity.PropertyDataEntity;

public interface PropertyDetailRepo extends MongoRepository<PropertyDataEntity, String> {

}
