import { Router } from '@angular/router';
import { authState } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DrinkShop';

  constructor(public authService: AuthenticationService,
    private router: Router){

  }

  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
