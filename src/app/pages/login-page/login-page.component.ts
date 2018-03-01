import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;
  loading = true;
  anon: boolean;
  user: any;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
   }

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
    if (form.valid) {
    this.processing = true;
    const data = {
      username: this.username,
      password: this.password
    }
      this.authService.login(data)
        .then((result) => {
          console.log(result)
          if (result.type == 'business') { 
            this.router.navigate(['/business-profile', this.user._id])
          } else if (result.type =='user'){
            this.router.navigate(['/'])
          } else {
            this.router.navigate(['/login'])
          }
        // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.processing = false;
          this.error =  err.error.error;
          this.feedbackEnabled = false;
        });
  }
}
}