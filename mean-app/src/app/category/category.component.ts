import { Component, OnInit,OnDestroy } from '@angular/core';
import {Http} from '@angular/http';

import {CategoryService} from '../category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})

export class CategoryComponent implements OnInit,OnDestroy {

  private req:any;
  categoryList : [any];

  constructor(private http:Http,private catService:CategoryService) { }

  ngOnInit() {

    this.req = this.catService.list().subscribe(data=>{
        this.categoryList = data as [any];
    });
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }
}
