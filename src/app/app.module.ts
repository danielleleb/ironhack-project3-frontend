import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

// GUARDS

import { AuthService } from './services/auth.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BusinessSignUpComponent } from './pages/business-sign-up/business-sign-up.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { ProductsService } from './services/products.service';
import { UserService } from './services/user.service';

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
  { path: 'homepage',  component: HomePageComponent
   , canActivate: [ RequireUserGuardService ] 
  },
  { path: 'business-profile/:id',  component: BusinessProfileComponent
   , canActivate: [ RequireUserGuardService ] 
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
    BusinessProfileComponent
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
