package com.property.rental.service.core.api.dao;

public interface PropertyDetailDao {

	public String getPropertyDetail(String propertyID);
	
	public String getAllPropertyDetail();
	
	public String deletePropertyDetail(String propertyID);

	public String updatePropertyDetail(String propertyID);

	public String addPropertyDetail(String propertyID);

}
