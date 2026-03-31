package com.property.rental.service.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan("com.property.rental.service.*")
@EnableMongoRepositories(basePackages = "com.property.rental.service.core.api.db")
@EnableScheduling
public class PropertyRentalServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PropertyRentalServiceApplication.class, args);
                                                                                                                                                                                                                                                                                                                                                                  	}

}
