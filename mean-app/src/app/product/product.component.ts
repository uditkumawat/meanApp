import { Component, OnInit,OnDestroy } from '@angular/core';

import {Http} from '@angular/http';

import {ProductService} from '../product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})

export class ProductComponent implements OnInit,OnDestroy {

  private req:any;
  productList : [any];

  constructor(private http:Http,private productService:ProductService) { }

  ngOnInit() {

    this.req = this.productService.list().subscribe(data=>{
      this.productList = data as [any];
    });
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

  showDetails(){
    console.log("id");
  }
}
