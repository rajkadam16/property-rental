package com.property.rental.service.common.model;


import lombok.Data;

import java.util.List;

@Data
public class OfficeHours {
    private String time;
    private String timeZone;
    private List<String> workingDays;
}