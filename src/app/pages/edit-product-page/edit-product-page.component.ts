import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {
  products: {}[];
  businessId: String


  
  constructor(
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

}
