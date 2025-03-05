package com.property.rental.service.common.model;


import lombok.Data;

import java.util.List;

@Data
public class Unit {
    private String unit;
    private String price;
    private String usableArea;
    private String measureUnit;
    private String availableFrom;
    private String configuration;
    private String furnishing;
    private List<String> highlights;
    private List<String> kitchen;
}