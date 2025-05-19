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
private PropertyDetailRepo propertyDetailRepo;

	@Override
	public List<PropertyDataEntity> findByUserId(String userId) {
		return propertyDetailRepo.findByUserId(userId);
	}

	@Override
	public List<PropertyDataEntity> findAll() {
		return propertyDetailRepo.findAll();
	}

	@Override
	public boolean existsById(String propertyID) {
		return propertyDetailRepo.existsById(propertyID);
	}

	@Override
	public void deleteById(String propertyID) {
		propertyDetailRepo.deleteById(propertyID);
	}

	@Override
	public void save(PropertyDataEntity propertyDetail) {
		propertyDetailRepo.save(propertyDetail);
	}

}