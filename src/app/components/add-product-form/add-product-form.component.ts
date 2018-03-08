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
  isDummy: boolean;


  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = 'Everything is ok';
      this.isDummy = false;      
      this.submitForm.emit(true) 
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.error = 'There was an error with the image';
      this.isDummy = false;      
      this.processing = false;
      this.feedbackEnabled = false;
      this.submitForm.emit(false) 
    };

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.name);
      form.append('type', this.type);
      form.append('price', this.price);
      
      if(this.isDummy) {
        form.append('isDummy', true);
      }
    };
  }

  submit() {
    
  }


  submitFormValidation(formInput) {
    this.error = '';
    this.feedbackEnabled = true;
    if (formInput.valid){
      this.processing = true;
    
      if(this.uploader.queue.length === 0) {
        this.uploader.addToQueue([new File([new Blob([""])], "dummy")]);
        this.isDummy = true;
      }
  
      this.uploader.uploadAll();      
    }
  }


}
