package com.property.rental.service.core.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.property.rental.service.common.enity.PropertyDataEntity;
import com.property.rental.service.common.model.PropertyDataResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.service.PropertyDetailService;


@Service("propertyDetailService")
public class PropertyDetailServiceImpl implements PropertyDetailService  {

	@Autowired
	private PropertyDetailDao propertyDetailDao;


	@Override
	public PropertyDataResponse getAllPropertyDetails() {
		PropertyDataResponse propertyDataResponse = new PropertyDataResponse();
		List<PropertyDataEntity> propertyDataEntities=propertyDetailDao.getAllPropertyDetails();
		propertyDataResponse.setData(propertyDataEntities);
		Map<String, Set<String>> filterBy= new HashMap<>();
		propertyDataResponse.setFilterBy(filterBy);
		return propertyDataResponse;
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