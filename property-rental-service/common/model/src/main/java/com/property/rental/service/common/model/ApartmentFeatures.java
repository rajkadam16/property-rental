package com.property.rental.service.common.model;


import lombok.Data;

import java.util.List;

@Data
public class ApartmentFeatures {
    private String title;
    private List<String> features;
}