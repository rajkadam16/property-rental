package com.property.rental.service.common.enity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "navbar-items")
@Data
@NoArgsConstructor
@Getter
@Setter
public class NavbarEntity {
    @Id
    private String navbarId;
    private String title;
    private String routerLink;
}
