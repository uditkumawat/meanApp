import { Component, OnInit } from '@angular/core';

import {CategoryComponent} from '../category/category.component';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
