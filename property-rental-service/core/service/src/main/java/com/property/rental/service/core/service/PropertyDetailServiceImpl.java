package com.property.rental.service.core.service;

import java.util.List;

import com.property.rental.service.common.enity.PropertyDataEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.service.PropertyDetailService;


@Service("propertyDetailService")
public class PropertyDetailServiceImpl implements PropertyDetailService  {

	@Autowired
	private PropertyDetailDao propertyDetailDao;

	@Override
	public PropertyDataEntity getPropertyDetail(String propertyID) {
		return propertyDetailDao.getPropertyDetail(propertyID);
	}

	@Override
	public List<PropertyDataEntity> getAllPropertyDetails() {
		return propertyDetailDao.getAllPropertyDetails();
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