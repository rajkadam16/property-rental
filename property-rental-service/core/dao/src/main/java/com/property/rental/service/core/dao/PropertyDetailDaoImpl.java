package com.property.rental.service.core.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.property.rental.service.common.model.PropertyDataEntry;
import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.db.PropertyDetailRepo;

@Repository("propertyDetailDao")
public class PropertyDetailDaoImpl implements PropertyDetailDao {

	@Autowired
	PropertyDetailRepo propertyDetailRepo;

	public PropertyDataEntry getPropertyDetail(String propertyID) {
		return propertyDetailRepo.findById(propertyID).orElse(null);
	}

	public List<PropertyDataEntry> getAllPropertyDetails() {
		return propertyDetailRepo.findAll();
	}

	public String deletePropertyDetail(String propertyID) {
		propertyDetailRepo.deleteById(propertyID);
		return propertyID;
	}

	public String updatePropertyDetail(PropertyDataEntry propertyDetail) {
		 propertyDetailRepo.save(propertyDetail);
		 return "";
	}

	public String addPropertyDetail(PropertyDataEntry propertyDetail) {
		 propertyDetailRepo.insert(propertyDetail);
		 return "";
	}
}