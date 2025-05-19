package com.property.rental.service.common.commonutils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Autowired
    private JwtFilter jwtFilter;

    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilterBean() {
        FilterRegistrationBean<JwtFilter> regBean = new FilterRegistrationBean<>();
        regBean.setFilter(jwtFilter);
        regBean.addUrlPatterns("/property/*"); // Protect all property endpoints
        return regBean;
    }
}
