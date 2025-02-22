package com.property.rental.service.common.model;

import lombok.Data;

import java.util.Map;
import java.util.Set;
@Data
public class PropertyFilter {
    private String filterType;
    private Map<String, Set<String>> filterBy;
}
