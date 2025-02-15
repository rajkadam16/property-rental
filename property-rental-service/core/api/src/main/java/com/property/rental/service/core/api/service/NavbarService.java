package com.property.rental.service.core.api.service;

import com.property.rental.service.common.enity.Navbar;


import java.util.List;

public interface NavbarService {

    public Navbar getNavbarItemById(String navbarId);

    public List<Navbar> getAllNavbarItems();

    public String deleteNavbarItem(String navbarId);


    public String createNavbarItem(Navbar navbarItem);

}
