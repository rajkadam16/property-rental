package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class PropertyDetails {

    private String name;
    private Address address;
    private String thumbnail;
    private String area;
    private String type;
    private List<String> parking;
    private String size;
    private double mapLat;
    private double mapLong;
    private String breadCrumbs;
    private List<String> amenities;
    private OfficeHours officeHours;
    private ContactUs contactUs;
}