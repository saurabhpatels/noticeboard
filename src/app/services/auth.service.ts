import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) {
  }

  getToken() {
    return !!localStorage.getItem("user");
  }

  getUser() {
    let user: any = localStorage.getItem("user")
    return JSON.parse(user);
  }

  logout() {
    localStorage.removeItem('user')
    this.route.navigate(['/'])
  }
}
