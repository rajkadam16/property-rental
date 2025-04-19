package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.enity.PropertyDataEntity;

public interface PropertyDetailDao {

	List<PropertyDataEntity> getUserProperties(String userId);
	public List<PropertyDataEntity> getAllPropertyDetails();
	
	public void deleteById(String propertyID);

	public String updatePropertyDetail(PropertyDataEntity propertyDetail);

	public String addPropertyDetail(PropertyDataEntity propertyDetail);

	public boolean existsById(String propertyID);

}
