import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-form-business',
  templateUrl: './signup-form-business.component.html',
  styleUrls: ['./signup-form-business.component.css']
})
export class SignupFormBusinessComponent implements OnInit {

  @Output() submitForm = new EventEmitter<any>();

  @Input() feedbackEnabled: boolean
  @Input() error: string;
  @Input() processing: boolean

  username: string;
  password: string;
  address: string

  constructor() { }

  ngOnInit() {
  }

  submitBusinessSignUp(form){
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid){
    this.processing = false;
    const data = {
      username: this.username,
      password: this.password,
      address: this.address
    }
    this.submitForm.emit(data);
  }
  }
}
