package com.property.rental.service.rest.controller;

import com.property.rental.service.common.enity.Navbar;
import com.property.rental.service.common.enity.NavbarConfig;
import com.property.rental.service.core.api.service.NavbarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("navbar")
public class NavbarController {
//    @Autowired
//    private NavbarService navbarService;
//
//    @GetMapping("get/all")
//    public List<Navbar> getAllNavbarItems() {
//        return navbarService.getAllNavbarItems();
//    }
//
//    @GetMapping("get/{navbarId}")
//    public ResponseEntity<Navbar> getNavbarItemById(@PathVariable String navbarId) {
//        Navbar navbarItem = navbarService.getNavbarItemById(navbarId);
//        if (navbarItem != null) {
//            return ResponseEntity.ok(navbarItem);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//
//    @PostMapping("create")
//    public Navbar createNavbarItem(@RequestBody Navbar navbarItem) {
//        navbarService.createNavbarItem(navbarItem);
//        return navbarItem;
//    }
//
//
//
//    @DeleteMapping("delete/{navbarId}")
//    public ResponseEntity<Void> deleteNavbarItem(@PathVariable String navbarId) {
//        navbarService.deleteNavbarItem(navbarId);
//        return ResponseEntity.noContent().build();
//    }
private final List<NavbarConfig.NavbarItem> navbarItems;

    @Autowired
    public NavbarController(List<NavbarConfig.NavbarItem> navbarItems) {
        this.navbarItems = navbarItems;
    }
    @CrossOrigin("http://localhost:4200/")
    @GetMapping
    public List<NavbarConfig.NavbarItem> getNavbarItems() {
        return navbarItems;
    }
}
