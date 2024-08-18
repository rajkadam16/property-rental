package com.property.rental.service.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.property.rental.service.core.api.service.PropertyDetailService;
import com.property.rental.service.core.service.PropertyDetailServiceImpl;
import com.property.rental.service.model.PropertyDetail;

@RestController
@RequestMapping("property")
public class PropertyDetailController {

	@Autowired
	private PropertyDetailService propertyDetailService;
	
	@GetMapping("{propertyID}")
	public Object getPropertyDetail(String propertyID) {
		return propertyDetailService.getPropertyDetail(propertyID);
	}
	
	@PostMapping()
	public Object createPropertyDetail(@RequestBody PropertyDetail propertyDetails) {
		return "Property created";
	}
	
	@PutMapping()
	public Object updatePropertyDetail(@RequestBody PropertyDetail propertyDetails) {
		return "Property Updated";
	}
	
	@DeleteMapping()
	public Object deletePropertyDetail(@RequestBody PropertyDetail propertyDetails) {
		return "Property deleted";
	}
	

}
