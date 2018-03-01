import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleSubmitForm(event) {
    console.log(event);
      this.authService.signup(event)
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
