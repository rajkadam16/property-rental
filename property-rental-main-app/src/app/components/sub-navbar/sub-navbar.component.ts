import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent {
selectData: any[] = [];

constructor(private subNav:CommonUtilitiesService) {}

ngOnInit(): void {
  this.subNav.parseJsonFile(api.subNavbar).subscribe((data:any) => {
    this.selectData = data;
  });
}
}
