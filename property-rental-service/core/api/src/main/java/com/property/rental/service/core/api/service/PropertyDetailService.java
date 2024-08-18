package com.property.rental.service.core.api.service;

public interface PropertyDetailService {

public String getPropertyDetail(String propertyID);
	
	public String getAllPropertyDetail();
	
	public String deletePropertyDetail(String propertyID);

	public String updatePropertyDetail(String propertyID);

	public String addPropertyDetail(String propertyID);

}
