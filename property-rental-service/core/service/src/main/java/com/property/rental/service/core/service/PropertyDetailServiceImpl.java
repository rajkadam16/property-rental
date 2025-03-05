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
	public List<PropertyDataEntity> getAllPropertyDetails() {
		return  this.propertyDetailDao.getAllPropertyDetails();
//
//		PropertyDataResponse propertyDataResponse = new PropertyDataResponse();
//		List<PropertyDataEntity> propertyDataEntities=propertyDetailDao.getAllPropertyDetails();
//		propertyDataResponse.setData(propertyDataEntities);
//		List<PropertyFilter> propertyFilterList = new ArrayList<>();
//
//		for (PropertyDataEntity propertyDataEntity : propertyDataEntities) {
//			Map<String, Set<String>> filterBy= new HashMap<>();
//			PropertyFilter propertyFilter = new PropertyFilter();
//			Set<String> propertyConfigurationSet = new HashSet<>();
//			String propertyId = propertyDataEntity.getId();
//			//filter By Configuration
//			List<Unit> units =propertyDataEntity.getAvailableUnits().getRows();
//			for (Unit unit : units) {
//				String configuration = unit.getConfiguration();
//				if (null != configuration){
//				if(filterBy.containsKey(configuration))
//				{
//					Set<String> propertyValueSet = filterBy.get(configuration);
//					propertyValueSet.add(propertyId);
//					filterBy.put(configuration, propertyValueSet);
//				}
//				else
//				{
//					//1bhk,set<"12","23">
//					//2bhk,set<"12","23">
//					propertyConfigurationSet.add(propertyId);
//					filterBy.put(configuration, propertyConfigurationSet);
//				}
//					logger.info("@RJ,filterBy {}",filterBy);
//				propertyFilter.setFilterBy(filterBy);
//				propertyFilter.setFilterType("CONFIGURATION");
//				propertyFilterList.add(propertyFilter);
//				}
//			}
//		}
//
//		propertyDataResponse.setPropertyFilter(propertyFilterList);
//		return propertyDataResponse;
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