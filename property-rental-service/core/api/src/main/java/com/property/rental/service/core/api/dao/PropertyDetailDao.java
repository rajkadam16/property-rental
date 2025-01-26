package com.property.rental.service.core.api.dao;

import java.util.List;

import com.property.rental.service.common.model.PropertyDataEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PropertyDetailDao extends MongoRepository<PropertyDataEntry, String> {

	public PropertyDataEntry getPropertyDetail(String propertyID);
	
	public List<PropertyDataEntry> getAllPropertyDetails();
	
	public String deletePropertyDetail(String propertyID);

	public String updatePropertyDetail(PropertyDataEntry propertyDetail);

	public String addPropertyDetail(PropertyDataEntry propertyDetail);

}
