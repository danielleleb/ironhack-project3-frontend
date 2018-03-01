import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  // businessId: String;
  productId: String;
  product: {}

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      // this.businessId = String(params.id)
      this.productId = String(params.productId)

      this.productsService.getProductById(this.productId)
      .then((product) => {
        this.product = product
      })
   })

  }
  

}
