package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class NeighborHood {
    private String title;
    private String description;
    private List<String> details;
}