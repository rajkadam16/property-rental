package com.property.rental.service.common.model;

import com.property.rental.service.common.enity.PropertyDataEntity;
import lombok.Data;

import java.util.List;
import java.util.Map;
import java.util.Set;
@Data
public class PropertyDataResponse {
    private List<PropertyDataEntity> data;

    private  List<PropertyFilter> propertyFilter;
}
