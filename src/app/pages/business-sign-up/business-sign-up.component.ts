
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
<<<<<<< HEAD
=======
  
>>>>>>> 2daaec14fe376c5e393a8eacb8012b601df6eda9
  
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

<<<<<<< HEAD
  handleSubmitForm(event) {
      this.authService.signup(event)
      .then((result) => {
      this.router.navigate(['/business-profile', this.user._id])
        //     // ... navigate with this.router.navigate(['...'])
      })
      .catch((err) => {
        this.error = err.error.error; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
=======
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
>>>>>>> 2daaec14fe376c5e393a8eacb8012b601df6eda9
  }
}