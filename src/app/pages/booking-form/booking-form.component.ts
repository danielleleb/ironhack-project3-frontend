import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  @Input() product

  // businessId: String;
  productId: String;
  // product: {}
  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  //   this.activatedRoute.params
  //   .subscribe((params) => {
  //     // this.businessId = String(params.id)
  //     this.productId = String(params.productId)

  //     this.productsService.getProductById(this.productId)
  //     .then((product) => {
  //       this.product = product
  //     })
  //  })

  }
  
  handleBookingForm(event) {
    this.productsService.bookProduct(event)
    // window.location.reload()
    //       // this.router.navigate(['/'])

    //   .then((result) => {
    //   // this.router.navigate(['/'])
    //     //   this.error = err.error.error;  // ... navigate with this.router.navigate(['...'])
    //   })
    //   .catch((err) => {
    //     this.error = err.error.error; // :-)
    //     this.processing = false;
    //     this.feedbackEnabled = false;
    //   });
  }

}
