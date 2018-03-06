import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {

  @Input() product;
  @Output() submitForm = new EventEmitter<any>;

  name: string;
  type: string;
  price: number;

  constructor() { }

  ngOnInit() {
    this.name = this.product.name;
    this.type = this.product.type;
    this.price = this.product.price;

  }

 submitEditProductForm(form) {
    if (form.valid) {
      const data = {
        name: this.name,
        price: this.price,
        type: this.type,
        productId: this.product._id
      }
      this.submitForm.emit(data)
      window.location.reload()

    }
  }

}
