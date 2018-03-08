import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-form-business',
  templateUrl: './signup-form-business.component.html',
  styleUrls: ['./signup-form-business.component.scss']
})
export class SignupFormBusinessComponent implements OnInit {

  @Output() submitForm = new EventEmitter<any>();

  @Input() feedbackEnabled: boolean
  @Input() error: string;
  @Input() processing: boolean

  businessName: string;
  username: string;
  password: string;
  address: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  submitBusinessSignUp(form){
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid){
    this.processing = false;
    const data = {
      businessName: this.businessName,
      username: this.username,
      password: this.password,
      address: this.address,
      description: this.description
    }
    this.submitForm.emit(data);
  }
  }
}
