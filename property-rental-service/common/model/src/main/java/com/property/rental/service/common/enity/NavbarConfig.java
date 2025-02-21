package com.property.rental.service.common.enity;

import lombok.Getter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.Arrays;
import java.util.List;

@Configuration
public class NavbarConfig {

    @Bean
    public List<NavbarItem> navbarItems() {
        return Arrays.asList(
                new NavbarItem("Find Property", "/FindProperty"),
                new NavbarItem("Add property", "/addproperty"),
                new NavbarItem("Contact Us", "/contactus"),
                new NavbarItem("Sign Up", "/signup"),
                new  NavbarItem("Log In","/login")
        );
    }

    @Getter
    public static class NavbarItem {
        private String title;
        private String routerLink;

        public NavbarItem(String title, String routerLink) {
            this.title = title;
            this.routerLink = routerLink;
        }

    }
}