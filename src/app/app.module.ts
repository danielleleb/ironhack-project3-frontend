import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// GUARDS

import { AuthService } from './services/auth.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { ProductsService } from './services/products.service';
import { UserService } from './services/user.service';
// PAGES
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BusinessSignUpComponent } from './pages/business-sign-up/business-sign-up.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';

// COMPONENTS
import { BookingFormCComponent } from './components/booking-form-c/booking-form-c.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: '',  component: LandingPageComponent
  , canActivate: [ InitAuthGuardService ]
 },
  { path: 'login',  component: LoginPageComponent
  , canActivate: [ RequireAnonGuardService ]
 },
  { path: 'signup',  component: SignupPageComponent
  , canActivate: [ RequireAnonGuardService ] 
},
  { path: 'business/signup',  component: BusinessSignUpComponent
  , canActivate: [ RequireAnonGuardService ] 
},
{ path: 'business-profile/:productId/book',  component: BookingFormComponent
  , canActivate: [ RequireUserGuardService ]
},
{ path: 'business-profile/:id',  component: BusinessProfileComponent
  , canActivate: [ InitAuthGuardService ] 
},
{ path: ':citySearch/:typeSearch',  component: HomePageComponent 
  , canActivate: [ InitAuthGuardService ] 
},
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    BusinessSignUpComponent,
    BusinessProfileComponent,
    BookingFormComponent,
    BookingFormCComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    ProductsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
