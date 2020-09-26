import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {USERS} from '../util/users';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValid = true;
  loading = false;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl({value: '', disabled: false}, [Validators.required]),
      password: new FormControl({value: '', disabled: false}, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    const data = this.loginForm.getRawValue();
    const userLogin = USERS.find(user => user.username === data.username && user.password === data.password);
    if (userLogin) {
      this.authService.saveUser(userLogin);
      this.authService.redirectHomeUser();
    } else {
      this.isValid = false;
      this.loading = false;
    }
  }

}
