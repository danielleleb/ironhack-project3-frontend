
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
  loading = true;
  anon: boolean;
  user: any;
  
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
            this.loading = false;
            this.user = user;
            this.anon = !user;
          });
  }

  handleSubmitBusinessForm(event) {
      this.authService.businessSignup(event)
        .then((result) => {
          this.router.navigate(['/business-profile', this.user._id])
      //     // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
  }
}