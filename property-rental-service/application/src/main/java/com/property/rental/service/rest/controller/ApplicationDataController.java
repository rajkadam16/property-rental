package com.property.rental.service.rest.controller;

import com.property.rental.service.common.enity.NavbarEntity;
import com.property.rental.service.core.api.service.NavbarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("navbar")
public class ApplicationDataController {
    @Autowired
    private NavbarService navbarService;

    @GetMapping("get/all")
    public ResponseEntity<List<NavbarEntity>> getAllNavbarItems() {
        return ResponseEntity.ok(navbarService.getAllNavbarItems());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("create")
    public ResponseEntity<String> createNavbarItem(@RequestBody List<NavbarEntity>  navbarItems) {
        return ResponseEntity.ok(navbarService.createNavbarItem(navbarItems));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("delete/{navbarId}")
    public ResponseEntity<Void> deleteNavbarItem(@PathVariable String navbarId) {
        navbarService.deleteNavbarItem(navbarId);
        return ResponseEntity.noContent().build();
    }

}
