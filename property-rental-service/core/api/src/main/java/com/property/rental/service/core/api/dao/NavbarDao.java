package com.property.rental.service.core.api.dao;

import com.property.rental.service.common.enity.NavbarEntity;

import java.util.List;

public interface NavbarDao {

    public List<NavbarEntity> getAllNavbarItems();

    public String deleteNavbarItem(String navbarId);

    public String createNavbarItem(List<NavbarEntity> navbarItems);

}
