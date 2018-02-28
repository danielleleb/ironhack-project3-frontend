import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsService } from '../../services/products.service';

// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  businesses: {}[]

  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    
    this.userService.getBusinessList()
    .then((businesses) => {
      this.businesses = businesses})
   }
  }


