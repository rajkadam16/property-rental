package com.property.rental.service.common.model;

import com.property.rental.service.common.constants.PropertyConstants;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class AvailableUnits {
    private Set<String> cols = new HashSet<>();
    private List<Unit> rows;

    public AvailableUnits()
    {
    cols.addAll(PropertyConstants.UNITS_COLS);
    }

}