package com.property.rental.service.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.service.PropertyDetailService;
import com.property.rental.service.common.model.PropertyDetail;

@Service("propertyDetailService")
public class PropertyDetailServiceImpl implements PropertyDetailService  {

	@Autowired
	private PropertyDetailDao propertyDetailDao;

	@Override
	public PropertyDetail getPropertyDetail(String propertyID) {
		return propertyDetailDao.getPropertyDetail(propertyID);
	}

	@Override
	public List<PropertyDetail> getAllPropertyDetails() {
		return propertyDetailDao.getAllPropertyDetails();
	}

	@Override
	public String deletePropertyDetail(String propertyID) {
		return propertyDetailDao.deletePropertyDetail(propertyID);
	}

	@Override
	public String updatePropertyDetail(PropertyDetail propertyDetail) {
		return propertyDetailDao.updatePropertyDetail(propertyDetail);
	}

	@Override
	public String addPropertyDetail(PropertyDetail propertyDetail) {
		return propertyDetailDao.addPropertyDetail(propertyDetail);
	}
	

}