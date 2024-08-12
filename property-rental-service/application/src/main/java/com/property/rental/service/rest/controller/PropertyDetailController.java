package com.property.rental.service.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.property.rental.service.core.api.service.PropertyDetailService;

@RestController
public class PropertyDetailController {

	@Autowired
	private PropertyDetailService propertyDetailService;

	@GetMapping("/hello")
	public Object getPropertyDetail(String propertyId) {
		return propertyDetailService.shouldAnswerWithTrue();
	}

}
