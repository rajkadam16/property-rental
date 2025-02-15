package com.property.rental.service.common.enity;
import com.property.rental.service.common.model.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Document(collection = "properties")
@Data
@NoArgsConstructor
@Getter
@Setter
public class PropertyDataEntry {
    @Id
    private String id;
    private List<ImageGallery> imgGallery;
    private PropertyDetails propertyDetails;
    private AboutUs aboutUs;
    private Highlights highlights;
    private AvailableUnits availableUnits;
    private NeighborHood neighborHood;
    private CommunityAmenities communityAmenities;
    private ApartmentFeatures apartmentFeatures;
    private Education education;
    private Transportation transportation;
    private Hospital hospital;

}

