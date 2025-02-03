import { Component } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  propertyForm: FormGroup;
  amenitiesList = ['Pets Allowed', 'Fitness Center', 'Pool', 'Dishwasher', 'Refrigerator', 'Kitchen'];
  parkingOptions = ['2 Wheeler', '4 Wheeler'];
  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(private fb: FormBuilder,private readonly propertyService: CommonUtilitiesService) {
    this.propertyForm = this.fb.group({
      imgGallery: this.fb.array([this.createImageGalleryGroup()]),
      propertyDetails: this.createPropertyDetailsGroup(),

    });
  }

  // Create form groups for each section
  createImageGalleryGroup(): FormGroup {
    return this.fb.group({
      id: [''], // You can generate UUIDs here if needed
      type: ['ImageGallery', ],
      images: this.fb.array([this.createImageGroup()])
    });
  }

  createImageGroup(): FormGroup {
    return this.fb.group({
      url: ['', ],
      alt: ['']
    });
  }

  createPropertyDetailsGroup(): FormGroup {
    return this.fb.group({
      name: ['', ],
      address: this.fb.group({
        address1: ['', ],
        address2: [''],
        aptNumber: [''],
        city: ['', ],
        zipCode: ['', ],
        state: ['', ],
        country: ['', ]
      }),
      thumbnail: [''],
      area: [''],
      type: ['ResidentialApartment'],
      parking: this.fb.array([]),
      size: [''],
      mapLat: [''],
      mapLong: [''],
      breadCrumbs: [''],
      amenities: this.fb.array([]),
      officeHours: this.fb.group({
        time: [''],
        timeZone: [''],
        workingDays: this.fb.array([])
      }),
      contactUs: this.fb.group({
        title: ['Contact This Property'],
        phone: [''],
        email: ['', ]
      })
    });
  }

  // Similar create methods for other sections (aboutUs, highlights, etc.)

  // Add/Remove methods for FormArrays
  getImagesControls(gallery: AbstractControl): FormGroup[] {
    const imagesArray = gallery.get('images') as FormArray;
    return imagesArray.controls as FormGroup[];
  }
  
  getGalleryFormArray(index: number): FormArray {
    const gallery = this.imgGalleryArray.at(index) as FormGroup;
    return gallery.get('images') as FormArray;
  }
  addImage(galleryIndex: number): void {
  this.getGalleryFormArray(galleryIndex).push(this.createImageGroup());
}

removeImage(galleryIndex: number, imageIndex: number): void {
  this.getGalleryFormArray(galleryIndex).removeAt(imageIndex);
}
  addImageGallery(): void {
    this.imgGalleryArray.push(this.createImageGalleryGroup());
  }

  removeImageGallery(index: number): void {
    this.imgGalleryArray.removeAt(index);
  }



  // Getters for form arrays
  get imgGalleryArray(): FormArray {
    return this.propertyForm.get('imgGallery') as FormArray;
  }

  get amenitiesArray(): FormArray {
    return this.propertyForm.get('propertyDetails.amenities') as FormArray;
  }

  // In the component class
// Add this method to handle amenity selection
onAmenityChange(event: any, amenity: string): void {
  const amenitiesArray = this.propertyForm.get('propertyDetails.amenities') as FormArray;
  
  if (event.target.checked) {
    amenitiesArray.push(this.fb.control(amenity));
  } else {
    const index = amenitiesArray.controls.findIndex(c => c.value === amenity);
    if (index >= 0) {
      amenitiesArray.removeAt(index);
    }
  }
}

// Update the template for amenities checkboxes
  // Handle form submission

 

onSubmit() {
  if (this.propertyForm.valid) {
    this.propertyService.addProperty(this.propertyForm.value)
      .subscribe({
        next: (res) => console.log('Success:', res),
        error: (err) => console.error('Error:', err)
      });
  }
  console.log(this.propertyForm.value);
}
}
