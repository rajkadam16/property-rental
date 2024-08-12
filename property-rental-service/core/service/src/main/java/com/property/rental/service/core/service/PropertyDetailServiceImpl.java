package com.property.rental.service.core.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.rental.service.core.api.dao.PropertyDetailDao;
import com.property.rental.service.core.api.service.PropertyDetailService;

@Service("propertyDetailService")
public class PropertyDetailServiceImpl implements PropertyDetailService  {

	@Autowired
	private PropertyDetailDao propertyDetailDao;
	
	@Override
	public String shouldAnswerWithTrue() {
		return propertyDetailDao.shouldAnswerWithTrue();
	}
  
}