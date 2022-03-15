
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
     private router: Router,
     private location:Location) { }

  title:string = "Product Details";
  product: IProduct | undefined;

  ngOnInit(): void {
    console.log(this.title)
    const id = this.route.snapshot.paramMap.get('id');
    this.title +=`: ${id}`;  
    this.product = <IProduct>this.location.getState();
  
  }

  onBack ():void {
    this.router.navigate(['/products'])
  }

}
