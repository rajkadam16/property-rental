package com.property.rental.service.core.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Repository;

import com.property.rental.service.common.enums.PropertyTypeEnum;
import com.property.rental.service.common.model.PropertyDetail;
import com.property.rental.service.core.api.dao.PropertyDetailDao;


@Repository("propertyDetailDao")
public class PropertyDetailDaoImpl implements PropertyDetailDao {

	private PropertyDetail propertyDetail = new PropertyDetail();
	
	@Override
	public PropertyDetail getPropertyDetail(String propertyID) {
		System.out.println("getPropertyDetail :: "+this.propertyDetail.toString());

		return this.propertyDetail;
	}

	@Override
	public List<PropertyDetail> getAllPropertyDetails() {
		List<PropertyDetail> propertyDetailList = new ArrayList<>();
		propertyDetailList.add(this.propertyDetail);
		System.out.println("getAllPropertyDetails :: "+this.propertyDetail.toString());

		return propertyDetailList;
	}

	@Override
	public String deletePropertyDetail(String propertyID) {
		this.propertyDetail = null;
		System.out.println("deletePropertyDetail :: "+this.propertyDetail.toString());

		return propertyID;
	}

	@Override
	public String updatePropertyDetail(PropertyDetail propertyDetail) {
		this.propertyDetail.setPropertyID(UUID.randomUUID().toString());
		System.out.println("updatePropertyDetail :: "+this.propertyDetail.toString());

		return this.propertyDetail.getPropertyID();
	}

	@Override
	public String addPropertyDetail(PropertyDetail propertyDetail) {
		System.out.println("addPropertyDetail :: "+propertyDetail.toString());
		this.propertyDetail.setPropertyID(UUID.randomUUID().toString());
		this.propertyDetail.setPropertyName("Meadows Apartments");
		this.propertyDetail.setPropertyAddress("Waukesha");
		this.propertyDetail.setPropertyContact("262-242-8888");
		this.propertyDetail.setPropertyType(PropertyTypeEnum.RENTEL.toString());
		return this.propertyDetail.getPropertyID();
	}

	
}