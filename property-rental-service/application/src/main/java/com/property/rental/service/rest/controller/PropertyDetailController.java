package com.property.rental.service.rest.controller;
import com.property.rental.service.common.enity.PropertyDataEntity;
import com.property.rental.service.common.model.PropertyDataResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.property.rental.service.core.api.service.PropertyDetailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("property/")
public class PropertyDetailController {
	private static final Logger logger = LoggerFactory.getLogger(PropertyDetailController.class);
	@Autowired
	private PropertyDetailService propertyDetailService;

	@GetMapping("get/all")
	public Object getAllPropertyDetails() {
		return propertyDetailService.getAllPropertyDetails();
	}

	@GetMapping("user/{userId}")
	public ResponseEntity<?> getUserProperties(@PathVariable String userId) {
		List<PropertyDataEntity> properties = propertyDetailService.getUserProperties(userId);
		return ResponseEntity.ok(properties);
	}

	@PostMapping("create")
	public ResponseEntity<?> addPropertyDetail(@RequestBody PropertyDataEntity propertyDetail) {
		propertyDetailService.addPropertyDetail(propertyDetail);
		Map<String, String> response = new HashMap<>();
		response.put("message", "Property created successfully");
		return ResponseEntity.ok(response);
	}

	@PutMapping("update")
	public Object updatePropertyDetail(@RequestBody PropertyDataEntity propertyDetail) {
		return propertyDetailService.updatePropertyDetail(propertyDetail);
	}

	@DeleteMapping("delete/{propertyID}")
	public Object deletePropertyDetail(@PathVariable String propertyID) {
		return propertyDetailService.deletePropertyDetail(propertyID);
	}
	

}
