package com.property.rental.service.core.service;

import java.util.*;

import com.property.rental.service.common.enity.NavbarEntity;
import com.property.rental.service.common.enity.PropertyDataEntity;
import com.property.rental.service.common.model.PropertyDataResponse;
import com.property.rental.service.common.model.PropertyFilter;
import com.property.rental.service.common.model.Unit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.service.PropertyDetailService;


@Service("propertyDetailService")
public class PropertyDetailServiceImpl implements PropertyDetailService  {


	@Autowired
	private PropertyDetailDao propertyDetailDao;

	@Override
	public List<PropertyDataEntity> getUserProperties(String userId) {
		return propertyDetailDao.findByUserId(userId);
	}

	@Override
	public List<PropertyDataEntity> getAllPropertyDetails() {
		return propertyDetailDao.findAll();
	}

	@Override
	public String deletePropertyDetail(String propertyID) {
		boolean exists = propertyDetailDao.existsById(propertyID);
		if (exists) {
			propertyDetailDao.deleteById(propertyID);
			return "Property deleted successfully!";
		} else {
			return "Property not found!";
		}
	}

	@Override
	public String updatePropertyDetail(PropertyDataEntity propertyDetail) {
		propertyDetailDao.save(propertyDetail);
		return "Property updated successfully!";
	}

	@Override
	public String addPropertyDetail(PropertyDataEntity propertyDetail) {
		propertyDetailDao.save(propertyDetail);
		return "Property added successfully!";
	}



}