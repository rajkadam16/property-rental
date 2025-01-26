package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class ImageGallery {
    private String id;
    private String type;
    private List<Image> images;
}