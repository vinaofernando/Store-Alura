import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaProps } from '@fortawesome/angular-fontawesome';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  signIn(loginData: User) {
    this.authService.signIn(loginData.email, loginData.password);
  }
  googleAuth() {
    this.authService.googleAuth();
  }

  signInGitHub() {
    this.authService.signInGitHub();
  }

  facebookAuth() {
    this.authService.facebookAuth();
  }
}
