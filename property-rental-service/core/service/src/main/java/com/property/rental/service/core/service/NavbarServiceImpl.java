package com.property.rental.service.core.service;

import com.property.rental.service.common.enity.NavbarEntity;

import com.property.rental.service.core.api.dao.NavbarDao;
import com.property.rental.service.core.api.service.NavbarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.List;
@ComponentScan("com.property.rental.service.core.api.dao")
@Service("navbarService")
public class NavbarServiceImpl implements NavbarService {
    @Autowired
    private NavbarDao navbarDao;


    @Override
    public List<NavbarEntity> getAllNavbarItems() {
        return this.navbarDao.getAllNavbarItems();
    }

    @Override
    public String  deleteNavbarItem(String navbarId) {
      return this.navbarDao.deleteNavbarItem(navbarId);

    }


    @Override
    public String createNavbarItem(List<NavbarEntity> navbarItems) {
        return this.navbarDao.createNavbarItem(navbarItems);
    }
}
