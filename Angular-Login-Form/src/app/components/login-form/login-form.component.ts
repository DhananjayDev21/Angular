import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router:Router){}

  username: string = "";
  password: string = "";
  msg: string = "";

  onSubmit() {
    if (this.username === "admin" && this.password === "admin123") {
      this.router.navigateByUrl("table");
    } else {
      this.msg = "Invalid credentials";
    }
  }
}
