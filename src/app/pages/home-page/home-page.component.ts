import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  citySearch: string;
  products: Array<any>;
  showProfileLink: boolean;
  user: any
  showAlert:boolean;
  productsArray: Array<any>;
  showLoginForm:boolean;
  showSignupForm: boolean;
  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(
    private userService: UserService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showAlert = false
    this.showLoginForm = false;
    this.showProfileLink = true;
    this.showSignupForm = false;
    
    this.user = this.authService.getUser();
    
    this.activatedRoute.params
    .subscribe((params) => {
      this.citySearch = String(params.citySearch)
      this.productsService.getProductsBySearch(this.citySearch)
      .then((products) => {
        console.log(products)
        this.products = products
        this.productsArray = this.products;
      })
   })
    
    // this.userService.getBusinessList()
    // .then((businesses) => {
    //   this.businesses = businesses})
   }

   displayAlert() {
    this.showAlert = !this.showAlert
    this.showLoginForm = !this.showLoginForm

  }
  toggleSignupLogin() {
    this.showSignupForm = !this.showSignupForm;
    this.showLoginForm = !this.showLoginForm
  }

   goToBooking(productId){
    if (this.user) {
      this.router.navigate(['/business-profile', productId, 'book'])
      }
      else if (!this.user) {
        this.showAlert = !this.showAlert
        this.showLoginForm = !this.showLoginForm

      } 
    }

    private handleChangeFilter(event) {
      console.log(event);
      this.filterProduct(event)
    }

    private filterProduct(filters) {
      const bike = filters.bike;
      const skate = filters.skate;
      const surf = filters.surf;
      if (!bike && !skate && !surf) {
        return this.productsArray = this.products;
      }
      this.productsArray = this.products.filter((elem) => {
        if (bike && elem.type === 'Bike') {
          return true;
        }
        if (skate && elem.type === 'Skate') {
          return true;
        }
        if (surf && elem.type === 'Surf') {
          return true;
        }
      })
    }

    handleLoginForm(event) {
      this.error = null;
        this.authService.login(event)
          .then((result) => {
            if (result.type == 'business') { 
              this.router.navigate(['/business-profile', this.user._id])
            } else if (result.type =='user'){
              this.showAlert = !this.showAlert
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
        //   this.error = err.error.error;  // ... navigate with this.router.navigate(['...'])
      })
      .catch((err) => {
        this.error = err.error.error; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }
  }


