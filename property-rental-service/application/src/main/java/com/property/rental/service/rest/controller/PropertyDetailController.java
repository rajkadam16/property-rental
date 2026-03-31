package com.property.rental.service.rest.controller;

import com.property.rental.service.common.enity.PropertyDataEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.property.rental.service.core.api.service.PropertyDetailService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/property")
public class PropertyDetailController {
	@Autowired
	private PropertyDetailService propertyDetailService;

	@GetMapping("/get/all")
	public ResponseEntity<List<PropertyDataEntity>> getAllPropertyDetails() {
		return ResponseEntity.ok(propertyDetailService.getAllPropertyDetails());
	}

	@GetMapping("/secure")
	public ResponseEntity<String> secureEndpoint() {
		return ResponseEntity.ok("You accessed a secured API!");
	}

	@GetMapping("/user/{userId}")
	public ResponseEntity<List<PropertyDataEntity>> getUserProperties(@PathVariable String userId) {
		return ResponseEntity.ok(propertyDetailService.getUserProperties(userId));
	}

	@PreAuthorize("hasAnyRole('OWNER', 'ADMIN')")
	@PostMapping("/create")
	public ResponseEntity<Map<String, String>> addPropertyDetail(@RequestBody PropertyDataEntity propertyDetail) {
		String message = propertyDetailService.addPropertyDetail(propertyDetail);
		Map<String, String> response = new HashMap<>();
		response.put("message", message);
		return ResponseEntity.ok(response);
	}

	@PreAuthorize("hasAnyRole('OWNER', 'ADMIN')")
	@PutMapping("/update")
	public ResponseEntity<Map<String, String>> updatePropertyDetail(@RequestBody PropertyDataEntity propertyDetail) {
		String message = propertyDetailService.updatePropertyDetail(propertyDetail);
		Map<String, String> response = new HashMap<>();
		response.put("message", message);
		return ResponseEntity.ok(response);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/delete/{propertyID}")
	public ResponseEntity<Map<String, String>> deleteProperty(@PathVariable("propertyID") String propertyID) {
		String message = propertyDetailService.deletePropertyDetail(propertyID);
		Map<String, String> response = new HashMap<>();
		response.put("message", message);
		return ResponseEntity.ok(response);
	}
}
