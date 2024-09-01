import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css']
})
export class PropertyDataComponent implements OnInit{
product: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: CommonUtilitiesService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }
}
