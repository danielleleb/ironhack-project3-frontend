import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';


// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  citySearch: string;
  typeSearch: string;
  // businesses: {}[];
  products: {}[];

  constructor(
    private userService: UserService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.citySearch = String(params.citySearch)
      this.typeSearch = String(params.typeSearch)
      this.productsService.getProductsBySearch(this.citySearch, this.typeSearch)
      .then((products) => {
        console.log(products)
        this.products = products
      })
   })
    
    // this.userService.getBusinessList()
    // .then((businesses) => {
    //   this.businesses = businesses})
   }

  }


