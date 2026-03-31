/**
 *
 */
package com.property.rental.service.common.enity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
	private String contactNumber;

	@Indexed(unique = true)
	private String email;

	private String password;
	private List<String> roles = new ArrayList<>();
	private boolean enabled = true;
	private LocalDateTime createdAt = LocalDateTime.now();
}