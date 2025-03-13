package com.property.rental.service.core.api.service;

import java.util.List;

import com.property.rental.service.common.enity.PropertyDataEntity;
import com.property.rental.service.common.model.PropertyDataResponse;


public interface PropertyDetailService {

	List<PropertyDataEntity> getUserProperties(String userId);

	public List<PropertyDataEntity> getAllPropertyDetails();
	
	public String deletePropertyDetail(String propertyID);

	public String updatePropertyDetail(PropertyDataEntity propertyDetail);

	public String addPropertyDetail(PropertyDataEntity propertyDetail);



}