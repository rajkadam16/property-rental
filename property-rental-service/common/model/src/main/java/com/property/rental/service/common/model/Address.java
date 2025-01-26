package com.property.rental.service.common.model;

import lombok.Data;

@Data
public class Address {
    private String address1;
    private String address2;
    private String aptNumber;
    private String city;
    private String zipCode;
    private String state;
    private String country;
}