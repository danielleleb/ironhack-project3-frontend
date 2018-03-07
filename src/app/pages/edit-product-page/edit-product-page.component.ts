import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {
  // products: {}[];
  businessId: String
  feedbackEnabled = false;
  error = null;
  processing = false;
  // product: any;
  productId: any;

  @Input() product


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private authService: AuthService,
    private location: Location
  ) { }

  ngOnInit() {
  this.productId= this.product._id
  //   this.activatedRoute.params
  //   // .subscribe((params) => {
  //   //   this.productId = String(params.id)

  //     // this.productsService.getProductById(this.productId)
  //     // .then((product) => {
  //     //   this.product = product
  //     // })

      this.businessId = this.authService.getUser()._id;
  //  })
  }

  changeAvailableStatus(productId){
    this.productsService.returnProduct(productId)
    .then((result) => {
      this.router.navigate(['/business-profile', this.businessId])
    })
    .catch((err) => {
      this.error = err.error.error; // :-)
      this.processing = false;
      this.feedbackEnabled = false;
    });
  }

  handleEditProductForm() {
    window.location.reload()
    // this.router.navigate(['/business-profile', this.businessId])
    // this.productsService.updateProduct(event)
    // .then((result) => {
    //   this.router.navigate(['/business-profile', this.businessId])
    //     //   this.error = err.error.error;  // ... navigate with this.router.navigate(['...'])
    //   })
    //   .catch((err) => {
    //     this.error = err.error.error; // :-)
    //     this.processing = false;
    //     this.feedbackEnabled = false;
    //   });
  }
}
