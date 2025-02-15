/**
 * 
 */
package com.property.rental.service.common.enity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

/**
 *
 */
@Document(collection = "user-account-detail")
@Data
@NoArgsConstructor
@Getter
@Setter
public class UserAccountEntity {
	@Id
	private String id;
	private String firstName;
	private String lastName;
	private  String contactNumber;
	private String emailAddress;
	private String password;


}
