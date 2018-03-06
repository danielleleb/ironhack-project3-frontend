import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  apiUrl = environment.apiUrl;
  uploader: FileUploader = new FileUploader({
    url: `${this.apiUrl}/products/add-product/`
  });

  @Output() submitForm = new EventEmitter<any>();

  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;

  name: string;
  price: number;
  type: string;
  feedback: string;


  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = 'Everything is ok';
      console.log('okk');
      this.submitForm.emit() 
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.error = 'There was an error with the image';
      this.processing = false;
      this.feedbackEnabled = false;
    };
  }

  submit() {

  }


  submitFormValidation(formInput) {
    this.error = '';
    this.feedbackEnabled = true;
    if (formInput.valid){
      this.processing = true;
      console.log('here');
      this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.name);
        form.append('type', this.type);
        form.append('price', this.price);
      };
  
      this.uploader.uploadAll();      
    }
  }


}
