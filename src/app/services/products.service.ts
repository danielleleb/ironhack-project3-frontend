import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  private product: any;
  private productChange: Subject<any> = new Subject();

  private API_URL = 'http://localhost:3000/products/';


  constructor(private httpClient: HttpClient) { }

  private setProduct(product?: any) {
    this.product = product;
    this.productChange.next(product);
    return product;
  }

  addNewProduct(product: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/add-product`, product, options)
      .toPromise()
      .then((data) => this.setProduct(data));
  }

}