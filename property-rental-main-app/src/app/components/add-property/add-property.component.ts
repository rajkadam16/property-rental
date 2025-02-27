import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  propertyForm!: FormGroup;
 amenitiesList = [
    'Pets care',
    'Laundry',
    'Fitness Area',
    'Playing Area',
    'pool',
    'club house',
    'CourtYard',
  ];
  featureList = [
    'WiFi',
    'Air Conditioner',
    'Pets Allowed',
    'Balcony',
    'Modular Kitchen',
    'Wheel Chair Access',
    'Internet Access',
    'Watchman',
    'Transport',
  ];
  highlightList: string[] = [
    'Good Connectivity',
    'Dry Cleaning Service',
    'Lounge',
    'Closets',
    'Good view',
    'Super Markets',
  ];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      imgGallery: this.fb.group({
        imageGallery: this.fb.array([
          this.createImageGalleryGroup('ImageGallery'),
          this.createImageGalleryGroup('Photos'),
          this.createImageGalleryGroup('floorPlan')
        ])
      }),
      propertyDetails: this.fb.group({
        name: ['', Validators.required],
        address: this.fb.group({
          address1: ['', Validators.required],
          aptNumber: ['', Validators.required],
          city: ['', Validators.required],
          zipCode: ['', Validators.required],
          state: ['', Validators.required],
          country: ['', Validators.required],
        }),
        thumbnail: ['', Validators.required],
        area: ['', Validators.required],
        type: ['', Validators.required],
        parking: ['', Validators.required],
        size: ['', Validators.required],
        amenities: this.fb.array(
          this.amenitiesList.map(() => this.fb.control(false))
        ),
        officeHours: this.fb.group({
          time: ['', Validators.required],
          timeZone: ['', Validators.required],
          workingDays: this.fb.array(['']),
        }),
        contactUs: this.fb.group({
          phone: ['', Validators.required],
          email: ['', Validators.required],
        }),
      }),
      aboutUs: this.fb.group({
        description: ['', Validators.required],
        details: ['', Validators.required],
      }),
      availableUnits: this.fb.group({
        rows: this.fb.array([
          this.createAvailableUnitGroup()
        ]),
      }),
      highlights: this.fb.group({
        features: this.fb.array(
          this.featureList.map(() => this.fb.control(false))
        ),
      }),
      neighborHood: this.fb.group({
        description: ['', Validators.required],
        details: ['', Validators.required],
      }),
      communityAmenities: this.fb.group({
        features: this.fb.array([]),
      }),
      apartmentFeatures: this.fb.group({
        features: this.fb.array([]),
      }),
      education: this.fb.group({
        details: this.fb.array([
          this.createDetailGroup()
        ]),
      }),
      hospital: this.fb.group({
        details: this.fb.array([
          this.createDetailGroup()
        ]),
      }),
      transportation: this.fb.group({
        details: this.fb.array([
          this.createDetailGroup()
        ]),
      }),
    });
    console.log(this.propertyForm.value);
  }

  createImageGalleryGroup(type: string): FormGroup {
    return this.fb.group({
      type: [type],
      images: this.fb.array([
        this.fb.group({
          url: ['', Validators.required],
          alt: ['', Validators.required],
        }),
      ]),
    });
  }

  createAvailableUnitGroup(): FormGroup {
    return this.fb.group({
      unit: ['', Validators.required],
      price: ['', Validators.required],
      usableArea: ['', Validators.required],
      measureUnit: ['', Validators.required],
      availableFrom: ['', Validators.required],
      furnishing: this.fb.group({
        type: ['', Validators.required],
      }),
      highlights: this.fb.array(
        this.highlightList.map(() => this.fb.control(false))
      ),
      kitchen: this.fb.array([]),
    });
  }

  createDetailGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      distance: ['', Validators.required],
      type: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.propertyForm.valid) {
      console.log(this.propertyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
