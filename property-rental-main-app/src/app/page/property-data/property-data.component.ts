import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css'],
})
export class PropertyDataComponent implements OnInit {
  product: any | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: CommonUtilitiesService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
  
  FloorPlanTour(){
    alert('Floor Plan Tour not available yet');
  }

  propertyDetalisList: any = {
    heading: 'Unique Features',
    nearbyLandmarks: [
      'Columbia College is 1.5 miles away.',
      'UIC is a mile away.',
      'Union Station 0.3 miles away',
      '4 Grocery Stores Within a 5 Minute Walk',
      'Concentra Urgent care located in the building',
      'French Market 0.2 miles away',
      'Sales Force Tower is a mile away.',
      'Chicago Kent Law School is 0.2 miles away.',
      'Deloitte is 0.7 miles away.',
      'Google Office is 0.9 miles away.',
      'Ogilvie Station across the street',
      'DePaul University is 1.3 miles away.',
      'Millennium Park is 1 mile away',
    ],

    apartmentFeatures: [
      'Wood Inspired Flooring*',
      'Breakfast Bars*',
      'Cultured Marble Vanities',
      'Decorator Light',
      'Generous Closet Space',
      'Granite Countertops*',
      'Stunning City Views*',
      'Trash Chutes on Every Floor',
      'Upgraded Appliances*',
      'Espresso Cabinetry Option Available',
      'Renovated Kitchens',
      'Newly Remodeled Residences*',
      'Oak Cabinetry Options Available',
      'Washer/Dryers*',
    ],

    convenienceAndCommunity: [
      'Online Rent Payments',
      'Ultra-Fast Fiber Internet Up to 1,000 Mbps',
      'Guest Suites',
      'Large Pets Accepted (breed restrictions)',
      'Digital Cable and HDTV Packages Available',
      'Luxer One Package Room',
      'On-site Dining Options',
      'Bicycle and Additional Personal Storage',
      'Free WiFi in The M Lounge',
    ],
  };

  properties = [
    { name: 'Property 1' },
    { name: 'Property 2' },
    { name: 'Property 3' },
    { name: 'Property 1' },
    { name: 'Property 2' },
    { name: 'Property 3' },
  ];

  NeighborhoodData = {
    heading: 'Neighborhood',
    description:
      'Chicago’s reputation as one of America’s most distinctive cities owes a lot to the electric atmosphere and vibrant culture that defines Downtown Chicago. Iconic sites like Grant Park, Soldier Field, the Chicago Theatre, Navy Pier, and the Chicago Riverwalk are the most famous landmarks in Downtown, but that barely scratches the surface of what the neighborhood has to offer.',
    details: [
      'Dozens of theaters, live music venues, museums, and galleries fill the area, along with hundreds of shops and restaurants catering to every conceivable taste.',
      'The campuses of Columbia College Chicago, DePaul University, and the Art Institute of Chicago are also located here.',
    ],
  };

  AboutPresidentialTowers = {
    heading: '        About Presidential Towers',
    description:
      'What do you want to do tonight? The simple question holds such anticipation, especially here at Presidential Towers, where you can get just about anywhere on foot. With a Fitness Formula Club, a relaxing sundeck, and several restaurants in the building, the options are endless. So go ahead, live life on your terms. Schedule a tour of our apartments in Chicago near the West Loop today!',
    details: [
      'Presidential Towers is an apartment community managed by Waterton, located in Cook County and the 60661 ZIP Code. This area is served by the Chicago Public Schools attendance zone.',
    ],
  };
}
