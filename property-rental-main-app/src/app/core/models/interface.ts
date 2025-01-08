
export interface TabModel {
    id: string
    displayName: string
    defaultActive: string
    selected: boolean
    components : any[]
  }

  // property-photos.model.ts
export interface Image {
  url: string;
  alt: string;
}

export interface PropertyImages {
  id: string;
  images: Image[];
}

export interface PropertyData {
  id: number;
  propertyImgGallery: ImageGallery;
  propertyPhotos: ImageGallery;
  propertyFloorPlans: ImageGallery;
  locationhierarchy: string;
  propertyName: string;
  propertyLocation: string;
  propertyPrice: string;
  propertyOverViewImage: string;
  propertyCardImage: string;
  propertyArea: string;
  propertySize: string;
  propertyAmenities: string[];
  floorplandetails: FloorPlanDetails;
  propertyunitsdata: PropertyUnitsData;
  AboutProperty: AboutProperty;
  UniqueFeaturesOfProperty: FeaturesSection;
  NeighborhoodData: NeighborhoodData;
  PropertyAmenitie: FeaturesSection;
  ApartmentFeature: FeaturesSection;
  propertySchoolData: PropertySchoolData;
  contactpropertybox: ContactPropertyBox;
}

export interface ImageGallery {
  id: string;
  images: ImageData[];
}

export interface ImageData {
  url: string;
  alt: string;
}

export interface FloorPlanDetails {
  heading: string;
  features: Array<{ value: string }>;
}

export interface PropertyUnitsData {
  propertyunitscol: Array<{ value: string }>;
  unitsdata: UnitData[];
}

export interface UnitData {
  unit: string;
  price: string;
  squarefit: string;
  Availability: string;
  features: Array<{ value: string }>;
  KitchenFeatures?: Array<{ value: string }>;
  Highlights?: FeaturesSection;
  "KitchenFeatures:"?: FeaturesSection; // Handling the typo in the provided data
}

export interface AboutProperty {
  heading: string;
  description: string;
  details: string[];
}

export interface FeaturesSection {
  heading: string;
  features: Array<{ list: string }>;
}

export interface NeighborhoodData {
  heading: string;
  description: string;
  details: string[];
}

export interface PropertySchoolData {
  heading: string;
  schoolData: School[];
}

export interface School {
  schoolName: string;
  schoolAddress: string;
  schoolDistance: string;
  schoolType: string;
  schoolRating: string;
}

export interface ContactPropertyBox {
  isEnabled: boolean;
  heading: string;
  btn1: string;
  btn2: string;
  phone: string;
}
