package com.property.rental.service.common.model;

import lombok.Data;

import java.util.List;

@Data
public class AvailableUnits {
    private List<String> cols;
    private List<Unit> rows;

    @Data
    public static class Unit {
        private String unit;
        private String price;
        private String usableArea;
        private String measureUnit;
        private String availabilFrom;
        private List<Furnishing> furnishing;
        private List<String> highlights;
        private List<String> kitchen;
    }
}