/**
 * 
 */
package com.property.rental.service.common.enity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

/**
 *
 */
@Document(collection = "user-account-detail")
@Data

public class UserAccountEntity {
	@Id
	private String id;
	private String firstName;
	private String lastName;
	private  String contactNumber;
	private String email;
	private String password;
}