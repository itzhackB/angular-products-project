import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './products'; 

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private productService : ProductService) {
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products=> {

        this.products = products;
        this.filteredProducts= this.products;
      },
      error: err => this.errorMessage = err
    })

  }
  ngOnDestroy():void{
      this.sub.unsubscribe();
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string='';
  sub!: Subscription;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.perfomeFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  perfomeFilter(filterBy: string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct)=>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message:string):void{
    this.pageTitle = message
  }
}
