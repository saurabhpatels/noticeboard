import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  errorMessage = '';

  constructor(private apiService: ApiService, private route: Router) {
  }

  ngOnInit(): void {

  }

  login() {
    this.apiService.login(this.user).subscribe((res: any) => {
      // navigate the user to dashboard if any valid user found
      if (res && res.length > 0) {
        localStorage.setItem('user', JSON.stringify(res[0]))
        this.route.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'No User Found'
      }
    })
  }

}
