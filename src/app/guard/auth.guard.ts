import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    // Validation if User is Logged in Or Not, Else It Will Redirect to Login Page
    if (!this.authService.getToken()) {
      this.router.navigateByUrl("/login");
    }
    return this.authService.getToken();
  }

}
