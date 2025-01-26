package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class Hospital {
    private String title;
    private List<Detail> details;
}