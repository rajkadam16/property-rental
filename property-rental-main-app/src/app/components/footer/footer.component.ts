import { Component, OnInit } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  footerLinks: { heading: string; links: { label: string; href: string }[] }[] = [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Find Property', href: '/FindProperty' },
        { label: 'Add Property', href: '/addproperty' },
        { label: 'Dashboard', href: '/dashboard' },
      ]
    },
    {
      heading: 'Support',
      links: [
        { label: 'Contact Us', href: '/contactus' },
        { label: 'FAQs', href: '/' },
        { label: 'Help Center', href: '/' },
        { label: 'Report an Issue', href: '/contactus' },
      ]
    }
  ];

  constructor(private readonly footerService: CommonUtilitiesService) {}

  ngOnInit(): void {
    // data service available if needed
  }
}