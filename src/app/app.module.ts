import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from "ng2-file-upload";

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
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SignupFormBusinessComponent } from './components/signup-form-business/signup-form-business.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';

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
  { path: 'business-profile/:id/edit',  component: EditProductPageComponent 
    , canActivate: [ RequireUserGuardService ] 
  },
  { path: 'business-profile/:productId/book',  component: BookingFormComponent
    , canActivate: [ RequireUserGuardService ]
  },
  { path: 'business-profile/:id',  component: BusinessProfileComponent
    , canActivate: [ RequireUserGuardService ] 
  },
  { path: ':citySearch',  component: HomePageComponent 
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
    LoginFormComponent,
    SearchFormComponent,
    ProductCardComponent,
    SignupFormBusinessComponent,
    AddProductFormComponent,
    EditProductFormComponent,
    EditProductPageComponent,
<<<<<<< HEAD
    FilterFormComponent
=======
    FileSelectDirective
>>>>>>> 32172fe58ff50cc088f0b7ee00f9aed050c09dd7
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
