import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
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
  products: {}[]
  businessId: String
  showProfileLink: boolean;

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.showProfileLink = false;

    this.user = this.authService.getUser();

    this.activatedRoute.params
    .subscribe((params) => {
      this.businessId = String(params.id)

      this.productsService.getProductList(this.businessId)
      .then((products) => {
        this.products = products
      })
   })

  }
  
  goBack() {
    this.location.back();
  }

  toggleForm() {
    this.showSelected = !this.showSelected;
  }

  handleAddProductForm(event) {
    // this.error = '';
    // this.feedbackEnabled = true;
    // if (form.valid){
    // this.processing = true;
    // const data = {
    //   name: this.name,
    //   type: this.type,
    //   price: this.price
    // }
      this.productsService.addNewProduct(event)
        .then((result) => {
            this.router.navigate(['/business-profile/', this.businessId])
      //     // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
        this.toggleForm()
    
  }

  goToBooking(productId){
    this.router.navigate(['/business-profile', productId, 'book'])
 }
}
