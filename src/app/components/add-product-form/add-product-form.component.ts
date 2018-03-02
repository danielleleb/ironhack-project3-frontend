import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<any>();

  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;

  name: string;
  price: number;
  type: string;

  constructor() { }

  ngOnInit() {
  }

  handleAddProductForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid){
    this.processing = true;
    const data = {
      name: this.name,
      type: this.type,
      price: this.price
    }
      this.submitForm.emit(data)     
    }
  }


}
