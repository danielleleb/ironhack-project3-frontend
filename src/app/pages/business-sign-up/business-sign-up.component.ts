
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-business-sign-up',
  templateUrl: './business-sign-up.component.html',
  styleUrls: ['./business-sign-up.component.css']
})
export class BusinessSignUpComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid){
    this.processing = true;
    const data = {
      username: this.username,
      password: this.password
    }
      this.authService.businessSignup(data)
        .then((result) => {
            this.router.navigate(['/homepage'])
      //     // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
  }
}
}