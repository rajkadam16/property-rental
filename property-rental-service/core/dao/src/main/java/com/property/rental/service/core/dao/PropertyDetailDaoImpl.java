package com.property.rental.service.core.dao;

import org.springframework.stereotype.Repository;

import com.property.rental.service.core.api.dao.PropertyDetailDao;


@Repository("propertyDetailDao")
public class PropertyDetailDaoImpl implements PropertyDetailDao {

	@Override
	public String getPropertyDetail(String propertyID) {
		return "getPropertyDetail > get called by raj kadam";
	}

	@Override
	public String getAllPropertyDetail() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deletePropertyDetail(String propertyID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updatePropertyDetail(String propertyID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String addPropertyDetail(String propertyID) {
		// TODO Auto-generated method stub
		return null;
	}

	
}