package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class AvailableUnits {
    private List<String> cols;
    private List<Unit> rows;
}