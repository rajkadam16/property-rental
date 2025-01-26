package com.property.rental.service.common.model;


import lombok.Data;

import java.util.List;

@Data
public class CommunityAmenities {
    private String title;
    private List<String> features;
}