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
import com.property.rental.service.common.model.PropertyDetail;

@RestController
@RequestMapping("property")
public class PropertyDetailController {

	@Autowired
	private PropertyDetailService propertyDetailService;
	
	@GetMapping("{propertyID}")
	public Object getPropertyDetail(String propertyID) {
		return propertyDetailService.getPropertyDetail(propertyID);
	}
	
	@GetMapping("/details/{propertyID}")
	public Object getAllPropertyDetails(String propertyID) {
		return propertyDetailService.getAllPropertyDetails();
	}
	
	@PostMapping("/add")
	public Object addPropertyDetail(@RequestBody PropertyDetail propertyDetail) {
		return propertyDetailService.addPropertyDetail(propertyDetail);
	}
	
	@PutMapping("/update")
	public Object updatePropertyDetail(@RequestBody PropertyDetail propertyDetail) {
		return propertyDetailService.updatePropertyDetail(propertyDetail);
	}
	
	@DeleteMapping("/delete")
	public Object deletePropertyDetail( String propertyID) {
		return propertyDetailService.deletePropertyDetail(propertyID);
	}
	

}
