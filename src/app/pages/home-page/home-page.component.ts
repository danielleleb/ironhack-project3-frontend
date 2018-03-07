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

  constructor(
    private userService: UserService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showAlert = false
    this.user = this.authService.getUser();

    this.showProfileLink = true;
    
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
  }

   goToBooking(productId){
    if (this.user) {
      this.router.navigate(['/business-profile', productId, 'book'])
      }
      else if (!this.user) {
        this.showAlert = true
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
        if (bike && elem.type === 'bike') {
          return true;
        }
        if (skate && elem.type === 'skate') {
          return true;
        }
        if (surf && elem.type === 'surf') {
          return true;
        }
      })
    }

  }


