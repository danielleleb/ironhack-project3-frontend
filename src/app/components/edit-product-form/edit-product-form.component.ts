import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


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
  user: any;

  image: string;
  feedback: string;

  isDummy: boolean;


  constructor(
    private productsService: ProductsService,
    private router: Router,
    private authService: AuthService
  ) { 
  }

  ngOnInit() {
    this.name = this.product.name;
    this.type = this.product.type;
    this.price = this.product.price;
    this.user = this.authService.getUser();


    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = 'Everything is ok';
      this.isDummy = false;      
      this.submitForm.emit() 
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.error = 'There was an error with the image';
      this.processing = false;
      this.isDummy = false;      
      this.feedbackEnabled = false;
    };

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.name);
      form.append('type', this.type);
      form.append('price', this.price);
      form.append('id', this.product._id);

      if(this.isDummy) {
        form.append('isDummy', true);
      }

    };
  }
  changeAvailableStatus(productId){
    this.productsService.returnProduct(productId)
    .then((result) => {
      this.router.navigate(['business-profile', this.user._id])
    })
    .catch((err) => {
      this.error = err.error.error; // :-)
      this.processing = false;
      this.feedbackEnabled = false;
    });
  }

  submitEditProductForm(formInput) {
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
