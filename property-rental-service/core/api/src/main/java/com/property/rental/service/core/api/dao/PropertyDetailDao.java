package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.model.PropertyDetail;

public interface PropertyDetailDao {

	public PropertyDetail getPropertyDetail(String propertyID);
	
	public List<PropertyDetail> getAllPropertyDetails();
	
	public String deletePropertyDetail(String propertyID);

	public String updatePropertyDetail(PropertyDetail propertyDetail);

	public String addPropertyDetail(PropertyDetail propertyDetail);

}
