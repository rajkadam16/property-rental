package com.property.rental.service.core.dao;

import com.property.rental.service.common.model.PropertyDataEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.property.rental.service.core.api.dao.PropertyDetailDao;

import java.util.List;


@Repository("propertyDetailDao")
public class PropertyDetailDaoImpl  {

	@Autowired
	PropertyDetailDao propertyDetailDao;


	public PropertyDataEntry getPropertyDetail(String propertyID) {
		return propertyDetailDao.findById(propertyID).orElse(null);
	}


	public List<PropertyDataEntry> getAllPropertyDetails() {
		return propertyDetailDao.findAll();
	}


	public String deletePropertyDetail(String propertyID) {
		return "";
	}


	public String updatePropertyDetail(PropertyDataEntry propertyDetail) {
		return "";
	}


	public String addPropertyDetail(PropertyDataEntry propertyDetail) {
		return""; //propertyDetailDao.save(propertyDetail);
	}
}