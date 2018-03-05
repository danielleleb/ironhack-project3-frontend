import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';



@Injectable()
export class ProductsService {

  private API_URL =  environment.apiUrl + '/products';

  constructor(private httpClient: HttpClient) { }

  addNewProduct(product: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/add-product`, product, options)
      .toPromise();
  }
  getProductList(businessId) :Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${businessId}`, options)
     .toPromise()
      .then((data) => {
        console.log('getProductList', data);
        return data;
      })
  }
  
  getProductById(productId) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/view/${productId}`, options)
     .toPromise()
      .then((data) => {
        console.log('getProductById', data);
        return data;
      })
  }

  getProductsBySearch(citySearch) :Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/search?terms=${citySearch}`, options)
     .toPromise()
      .then((data) => {
        console.log('getProductsByS', data);
        return data;
      })
  }

  bookProduct(product: any){
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/book`, product, options)
     .toPromise()
      .then((data) => {
        console.log('pr', data);
        return data;
      })
  }

}
