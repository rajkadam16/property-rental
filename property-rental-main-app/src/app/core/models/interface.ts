// image.interface.ts
export interface Image {
  url: string;
  alt: string;
}

export interface ImageGallery {
  id: string;
  type: string;
  images: Image[];
}

// address.interface.ts
export interface Address {
  address1: string;
  address2: string;
  aptNumber: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}

// office-hours.interface.ts
export interface OfficeHours {
  time: string;
  timeZone: string;
  workingDays: string[];
}

// contact-us.interface.ts
export interface ContactUs {
  title: string;
  phone: string;
  email: string;
}

// property-details.interface.ts
export interface PropertyDetails {
  name: string;
  address: Address;
  thumbnail: string;
  area: string;
  type: string;
  parking: string[];
  size: string;
  mapLat: number;
  mapLong: number;
  breadCrumbs: string;
  amenities: string[];
  officeHours: OfficeHours;
  contactUs: ContactUs;
}

// about-us.interface.ts
export interface AboutUs {
  title: string;
  description: string;
  details: string[];
}

// highlights.interface.ts
export interface Highlights {
  title: string;
  features: string[];
}

// furnishing.interface.ts
export interface Furnishing {
  type: string;
  highlights: string[];
}

// available-unit.interface.ts
export interface AvailableUnit {
  unit: string;
  price: string;
  usableArea: string;
  measureUnit: string;
  availabilFrom: string;
  furnishing: Furnishing[];
  highlights: string[];
  kitchen: string[];
}

// available-units.interface.ts
export interface AvailableUnits {
  cols: string[];
  rows: AvailableUnit[];
}

// neighborhood.interface.ts
export interface Neighborhood {
  title: string;
  description: string;
  details: string[];
}

// community-amenities.interface.ts
export interface CommunityAmenities {
  title: string;
  features: string[];
}

// apartment-features.interface.ts
export interface ApartmentFeatures {
  title: string;
  features: string[];
}

// school.interface.ts
export interface School {
  name: string;
  address: string;
  distance: string;
  type: string;
  rating: string;
}

// education.interface.ts
export interface Education {
  title: string;
  details: School[];
}

// transportation.interface.ts
export interface Transportation {
  title: string;
  details: {
    name: string;
    address: string;
    distance: string;
    type: string;
    rating: string;
  }[];
}

// hospital.interface.ts
export interface Hospital {
  title: string;
  details: {
    name: string;
    address: string;
    distance: string;
    type: string;
    rating: string;
  }[];
}

// main interface
export interface Property {
  id: string;
  imgGallery: ImageGallery[];
  propertyDetails: PropertyDetails;
  aboutUs: AboutUs;
  highlights: Highlights;
  availableUnits: AvailableUnits;
  neighborHood: Neighborhood;
  communityAmenities: CommunityAmenities;
  apartmentFeatures: ApartmentFeatures;
  education: Education;
  transportation: Transportation;
  hospital: Hospital;
}