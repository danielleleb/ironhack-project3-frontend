import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {

  private business: any;
  private businessChange: Subject<any> = new Subject();

  private API_URL =  environment.apiUrl + '/user';


  constructor(private httpClient: HttpClient) { }

  private setBusiness(business?: any) {
    this.business = business;
    this.businessChange.next(business);
    return business;
  }

getBusinessList():Promise<any> {
  const options = {
    withCredentials: true
  };
  return this.httpClient.get(`${this.API_URL}/all-businesses`, options)
  .toPromise()
  .then((data) => this.setBusiness(data))
}
}

