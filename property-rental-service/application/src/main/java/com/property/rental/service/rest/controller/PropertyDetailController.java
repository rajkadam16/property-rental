package com.property.rental.service.rest.controller;
import com.property.rental.service.common.model.PropertyDataEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.property.rental.service.core.api.service.PropertyDetailService;


@RestController
@RequestMapping("property")
public class PropertyDetailController {

	@Autowired
	private PropertyDetailService propertyDetailService;

	@CrossOrigin("http://localhost:4200/")
	@GetMapping("")
	public Object getAllPropertyDetails() {
		return propertyDetailService.getAllPropertyDetails();
	}

	@GetMapping("{propertyID}")
	public Object getPropertyDetail(String propertyID) {
		return propertyDetailService.getPropertyDetail(propertyID);
	}

	
	@PostMapping("/add")
	public Object addPropertyDetail(@RequestBody PropertyDataEntry propertyDetail) {
		return propertyDetailService.addPropertyDetail(propertyDetail);
	}
	
	@PutMapping("/update")
	public Object updatePropertyDetail(@RequestBody PropertyDataEntry propertyDetail) {
		return propertyDetailService.updatePropertyDetail(propertyDetail);
	}
	
	@DeleteMapping("/delete")
	public Object deletePropertyDetail( String propertyID) {
		return propertyDetailService.deletePropertyDetail(propertyID);
	}
	

}
