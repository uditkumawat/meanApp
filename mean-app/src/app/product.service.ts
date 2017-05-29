import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//domain API endpoint
const endpoint='assets/json/';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  list(){
    return this.http.get(endpoint+"products.json")
      .map(response=>response.json())
      .catch(this.handleError)
  }

  private handleError(error:any,caught:any):any{
    console.log(error,caught);
  }
}
