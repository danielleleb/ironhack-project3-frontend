
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
  username: string;
  password: string;
  loading = true;
  anon: boolean;
  user: any;
  address: string
  
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

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid){
    this.processing = true;
    const data = {
      username: this.username,
      password: this.password,
      address: this.address
    }
      this.authService.businessSignup(data)
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
}