import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<any>();

  @Input() feedbackEnabled: boolean;
  @Input() error: string; 
  @Input() processing: boolean;

  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  submitLoginForm(form){
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = false;
      const data = {
        username: this.username,
        password: this.password
      }
      this.submitForm.emit(data);
    }
  }
}
