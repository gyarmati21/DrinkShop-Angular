import { WhiskeyComponent } from './components/whiskey/whiskey.component';
import { PalinkaComponent } from './components/palinka/palinka.component';
import { VodkaComponent } from './components/vodka/vodka.component';
import { BorokComponent } from './components/borok/borok.component';
import { ItemComponent } from './components/items/item/item.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin-menu',
    component: AdminMenuComponent,
    ...canActivate(redirectToLogin)
  },

  {
    path: 'item',
    component: ItemComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'borok',
    component: BorokComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'vodka',
    component: VodkaComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'palinka',
    component: PalinkaComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'whiskey',
    component: WhiskeyComponent,
    ...canActivate(redirectToLogin)
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
