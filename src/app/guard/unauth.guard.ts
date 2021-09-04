import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    // Validation if User is Logout in Or Not, Else It Will Redirect to Dashboard Page
    if (this.authService.getToken()) {
      this.router.navigateByUrl("/dashboard");
    }
    return true;
  }

}
