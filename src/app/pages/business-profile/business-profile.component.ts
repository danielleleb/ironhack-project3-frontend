import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit {
  user;
  feedbackEnabled = false;
  error = null;
  processing = false;
  name: String;
  type: String
  price: number
  showSelected: boolean = false
  products: {}[];

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.productsService.getProductList()
    .then((products) => {
      this.products = products})
   }
  

  ShowButton(){
    this.showSelected = true;
}
  HideButton(){
    this.showSelected=false;
  }

  addProduct(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid){
    this.processing = true;
    const data = {
      name: this.name,
      type: this.type,
      price: this.price
    }
      this.productsService.addNewProduct(data)
        .then((result) => {
            this.router.navigate(['/business-profile'])
      //     // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
  }
}

}
