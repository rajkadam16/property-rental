package com.property.rental.service.core.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.property.rental.service.common.enity.PropertyDataEntity;
import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.db.PropertyDetailRepo;


@Repository("propertyDetailDao")
public class PropertyDetailDaoImpl implements PropertyDetailDao {

	@Autowired
 	private	PropertyDetailRepo propertyDetailRepo;



	public List<PropertyDataEntity> getAllPropertyDetails() {
		return propertyDetailRepo.findAll();
	}

	public String deletePropertyDetail(String propertyID) {
		propertyDetailRepo.deleteById(propertyID);
		return propertyID;
	}

	public String updatePropertyDetail(PropertyDataEntity propertyDetail) {
		 propertyDetailRepo.save(propertyDetail);
		 return "";
	}

	public String addPropertyDetail(PropertyDataEntity propertyDetail) {
		 propertyDetailRepo.insert(propertyDetail);
		 return "";
	}
}