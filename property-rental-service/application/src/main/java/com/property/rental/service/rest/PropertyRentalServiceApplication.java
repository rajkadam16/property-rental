package com.property.rental.service.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.property.rental.service.*")
public class PropertyRentalServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PropertyRentalServiceApplication.class, args);
	}

}
