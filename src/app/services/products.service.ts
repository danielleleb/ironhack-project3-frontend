import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';



@Injectable()
export class ProductsService {

  private product: any;
  private productChange: Subject<any> = new Subject();

  private API_URL =  environment.apiUrl + '/products';



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
  getProductList(businessId) :Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${businessId}`, options)
    .toPromise()
    // .then((data) => console.log(data))
    .then((data) => this.setProduct(data))
  }
  
  getProductById(productId) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/view/${productId}`, options)
    .toPromise()
    // .then((data) => console.log(data))
    .then((data) => this.setProduct(data))
  }

  getProductsBySearch(citySearch, typeSearch) :Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/view/${citySearch}/${typeSearch}`, options)
    .toPromise()
    // .then((data) => console.log(data))
    .then((data) => this.setProduct(data))
  }

  bookProduct(productId){
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/book/:productId`, options)
    .toPromise()
    // .then((data) => console.log(data))
    .then((data) => this.setProduct(data))
  }

}
