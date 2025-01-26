package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class Education {
    private String title;
    private List<Detail> details;
}