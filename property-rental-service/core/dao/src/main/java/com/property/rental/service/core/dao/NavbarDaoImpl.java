package com.property.rental.service.core.dao;

import com.property.rental.service.common.enity.Navbar;
import com.property.rental.service.core.api.dao.NavbarDao;
import com.property.rental.service.core.api.db.NavbarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository("NavbarDao")
public class NavbarDaoImpl implements NavbarDao {

    @Autowired
    private NavbarRepository navbarRepository;

    @Override
    public Navbar getNavbarItemById(String navbarId) {
        return navbarRepository.findById(navbarId).orElse(null);
    }

    @Override
    public List<Navbar> getAllNavbarItems() {
        return navbarRepository.findAll();
    }

    @Override
    public String deleteNavbarItem(String navbarId) {
        navbarRepository.deleteById(navbarId);
        return navbarId;
    }


    @Override
    public String createNavbarItem(Navbar navbarItem) {
         navbarRepository.save(navbarItem);
         return "created";
    }
}
