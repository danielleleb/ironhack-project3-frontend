import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {
  apiUrl = environment.apiUrl;
  uploader: FileUploader = new FileUploader({
    url: `${this.apiUrl}/products/update/`
  });

  @Output() submitForm = new EventEmitter<any>();
  @Input() product;
  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;

  name: string;
  type: string;
  price: number;

  image: string;
  feedback: string;


  constructor() { 
  }

  ngOnInit() {
    this.name = this.product.name;
    this.type = this.product.type;
    this.price = this.product.price;


    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = 'Everything is ok';
      this.submitForm.emit() 
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.error = 'There was an error with the image';
      this.processing = false;
      this.feedbackEnabled = false;
    };

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.name);
      form.append('type', this.type);
      form.append('price', this.price);
      form.append('id', this.product._id);
    };
  }

 submitEditProductForm(formInput) {
  this.error = '';
  this.feedbackEnabled = true;
  if (formInput.valid){
    this.processing = true;
    this.uploader.uploadAll();      
  }
  }

}
