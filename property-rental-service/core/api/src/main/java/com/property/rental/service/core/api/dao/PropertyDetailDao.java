package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.enity.PropertyDataEntity;

public interface PropertyDetailDao {

	public PropertyDataEntity getPropertyDetail(String propertyID);
	
	public List<PropertyDataEntity> getAllPropertyDetails();
	
	public String deletePropertyDetail(String propertyID);

	public String updatePropertyDetail(PropertyDataEntity propertyDetail);

	public String addPropertyDetail(PropertyDataEntity propertyDetail);

}
