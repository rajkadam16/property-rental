package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.enity.PropertyDataEntity;

public interface PropertyDetailDao {

List<PropertyDataEntity> findByUserId(String userId);
	List<PropertyDataEntity> findAll();
	boolean existsById(String propertyID);
	void deleteById(String propertyID);
	void save(PropertyDataEntity propertyDetail);

}
