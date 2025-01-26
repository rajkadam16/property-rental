package com.property.rental.service.core.api.db;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.property.rental.service.common.model.PropertyDataEntry;

public interface PropertyDetailRepo extends MongoRepository<PropertyDataEntry, String> {

}
