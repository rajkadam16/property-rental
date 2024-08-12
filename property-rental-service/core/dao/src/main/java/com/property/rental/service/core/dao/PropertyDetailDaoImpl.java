package com.property.rental.service.core.dao;

import org.springframework.stereotype.Repository;

import com.property.rental.service.core.api.dao.PropertyDetailDao;


@Repository("propertyDetailDao")
public class PropertyDetailDaoImpl implements PropertyDetailDao {

	@Override
	public String shouldAnswerWithTrue() {
		return "Property details > PropertyDetailDaoImpl executed.";
	}
	
}