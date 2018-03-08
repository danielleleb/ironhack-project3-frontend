import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {
  apiUrl = environment.apiUrl;

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
  form: any;
  showAlert:boolean;
  showEditForm:boolean;
  showSignupForm: boolean;
  showLoginForm: boolean;
  product: any;
  userPresent: boolean;
  bookingLength: any;
  bookingCost: any;

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.showProfileLink = false;
    this.userPresent = false;
    this.showEditForm = false;
    this.showSignupForm = false;
    this.showLoginForm = false;

    this.showAlert = false

    this.user = this.authService.getUser();
if (!this.user) {
  this.activatedRoute.params
  .subscribe((params) => {
    this.businessId = String(params.id)

    this.productsService.getProductList(this.businessId)
    .then((products) => {
      this.products = products
    })
 })
}
else if (this.user._id !== this.businessId) {
    this.activatedRoute.params
    .subscribe((params) => {
      this.businessId = String(params.id)

      this.productsService.getProductList(this.businessId)
      .then((products) => {
        this.products = products
      })
   })

  } 
else if (this.user._id == this.businessId) {
      this.activatedRoute.params
      .subscribe((params) => {
        this.businessId = String(params.id)

        this.productsService.getEntireProductList(this.businessId)
        .then((products) => {
          this.products = products
        })
    })
  }
  
  }

  handleLoginForm(event) {
    this.error = null;
      this.authService.login(event)
        .then((result) => {
          if (result.type == 'business') { 
            this.router.navigate(['/business-profile', this.user._id])
          } else if (result.type =='user'){
            window.location.reload()
          } else {
            this.router.navigate(['/login'])
          }
        // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.processing = false;
          this.error =  err.error.error;
          this.feedbackEnabled = false;
        });
  }

  handleSubmitForm(event) {
    this.error = null;
    this.authService.signup(event)
    .then((result) => {
      this.showAlert = !this.showAlert;
    window.location.reload()
      //   this.error = err.error.error;  // ... navigate with this.router.navigate(['...'])
    })
    .catch((err) => {
      this.error = err.error.error; // :-)
      this.processing = false;
      this.feedbackEnabled = false;
    });
}
  
  goBack() {
    this.location.back();
  }

  toggleForm() {
    this.showSelected = !this.showSelected;
  }

  handleAddProductForm(event) {
    if (event) {
      this.toggleForm();
      window.location.reload();
    }
  }

  displayAlert() {
    this.showAlert = !this.showAlert
    this.showLoginForm = !this.showLoginForm
  }
  toggleSignupLogin() {
    this.showSignupForm = !this.showSignupForm;
    this.showLoginForm = !this.showLoginForm
  }

  displayAddForm() {
    this.showSelected = !this.showSelected
  }


  displayEditForm(product) {
   this.showEditForm = !this.showEditForm;
   if(product){
   this.product = product
  }
}

  goToBooking(product){
    if (this.user) {
      this.userPresent = true;
      this.showAlert = !this.showAlert;
      this.product = product
    }
    else if (!this.user) {
      this.userPresent = false;
      this.showAlert = !this.showAlert
      this.showLoginForm = !this.showLoginForm

    }
 }

//  handleBookingForm(event) {
//   this.productsService.bookProduct(event)
//         // this.router.navigate(['/'])

//     .then((result) => {
//     // this.router.navigate(['/'])
//       //   this.error = err.error.error;  // ... navigate with this.router.navigate(['...'])
//     })
//     .catch((err) => {
//       this.error = err.error.error; // :-)
//       this.processing = false;
//       this.feedbackEnabled = false;
//     });
// }

calculateBookingLengthAndCost(startDate, endDate) {
  startDate = new Date(startDate);
  endDate = new Date(endDate)
  this.bookingLength = (endDate - startDate) / (24 * 3600 * 1000);
  this.bookingCost = this.bookingLength * this.product.price
  console.log(startDate, endDate)

}

}
