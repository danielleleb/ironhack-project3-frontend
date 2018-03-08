import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = true;
  anon: boolean;
  user: any;
  businessId: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
      if (this.user && this.user.type == 'business'){
        this.businessId = this.user._id
      }
    });
   
  }

  login() {
    // var navBarElement: any = document.getElementsByClassName("collapse")[0];
    // navBarElement.classList.remove('show');
    this.router.navigate(['/login']);
  }

  signup() {
    // var navBarElement: any = document.getElementsByClassName("collapse")[0];
    // navBarElement.classList.remove('show');
    this.router.navigate(['/signup']);
  }

  profile() {
    this.router.navigate(['/']);
  }

  businessProfile() {
    this.router.navigate(['/business-profile', this.businessId])
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }

  toggleNav(element) {
    console.log(element);
    if (element) {
      return;
    }
    var navBarElement: any = document.getElementsByClassName("collapse")[0];
    if (document.getElementsByClassName('show'))  {
      navBarElement.classList.remove('show');
    }
  }
}