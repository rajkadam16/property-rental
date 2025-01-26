package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class Highlights {
    private String title;
    private List<String> features;
}