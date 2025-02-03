package com.property.rental.service.rest.controller;
import com.property.rental.service.common.model.PropertyDataEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.property.rental.service.core.api.service.PropertyDetailService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("property/")
public class PropertyDetailController {
	private static final Logger logger = LoggerFactory.getLogger(PropertyDetailController.class);
	@Autowired
	private PropertyDetailService propertyDetailService;

	@CrossOrigin("http://localhost:4200/")
	@GetMapping("get/all")
	public Object getAllPropertyDetails() {
		return propertyDetailService.getAllPropertyDetails();
	}

	@GetMapping("get/{propertyID}")
	public Object getPropertyDetail(@PathVariable String propertyID) {
		logger.info("Info message - getPropertyDetail,propertyID={}",propertyID);
		return propertyDetailService.getPropertyDetail(propertyID);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("create")
	public Object addPropertyDetail(@RequestBody PropertyDataEntry propertyDetail) {
		return propertyDetailService.addPropertyDetail(propertyDetail);
	}
	
	@PutMapping("update")
	public Object updatePropertyDetail(@RequestBody PropertyDataEntry propertyDetail) {
		return propertyDetailService.updatePropertyDetail(propertyDetail);
	}

	@DeleteMapping("delete/{propertyID}")
	public Object deletePropertyDetail(@PathVariable String propertyID) {
		return propertyDetailService.deletePropertyDetail(propertyID);
	}
	

}
