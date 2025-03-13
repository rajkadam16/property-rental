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
	private static final Logger logger = LoggerFactory.getLogger(PropertyDetailServiceImpl.class);
	@Autowired
	private PropertyDetailDao propertyDetailDao;

	@Override
	public List<PropertyDataEntity> getUserProperties(String userId) {
		return this.propertyDetailDao.getUserProperties(userId);
	}

	@Override
	public List<PropertyDataEntity> getAllPropertyDetails() {
		return  this.propertyDetailDao.getAllPropertyDetails();
	}

	@Override
	public String deletePropertyDetail(String propertyID) {
		return propertyDetailDao.deletePropertyDetail(propertyID);
	}

	@Override
	public String updatePropertyDetail(PropertyDataEntity propertyDetail) {
		return propertyDetailDao.updatePropertyDetail(propertyDetail);
	}

	@Override
	public String addPropertyDetail(PropertyDataEntity propertyDetail) {
		return propertyDetailDao.addPropertyDetail(propertyDetail);
	}
	

}