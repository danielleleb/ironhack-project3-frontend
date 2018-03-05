import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {
  products: {}[];
  businessId: String
  feedbackEnabled = false;
  error = null;
  processing = false;


  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.businessId = String(params.id)

      this.productsService.getEntireProductList(this.businessId)
      .then((products) => {
        this.products = products
      })
   })
  }

  changeAvailableStatus(productId){
    this.productsService.returnProduct(productId)
    .then((result) => {
      this.router.navigate(['/business-profile/', this.businessId, 'edit'])
    })
    .catch((err) => {
      this.error = err.error.error; // :-)
      this.processing = false;
      this.feedbackEnabled = false;
    });
    }

}
