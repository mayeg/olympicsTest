import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user';


@Injectable()
export class AuthService {

  static KEY_USER = 'user';

  constructor(private router: Router) {
  }

  getUser(): User {
    const userData = localStorage.getItem('user');
    if (userData && userData !== '') {
      return <User> JSON.parse(userData);
    }
    return null;
  }

  saveUser(user: User): void {
    localStorage.setItem(AuthService.KEY_USER, JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem(AuthService.KEY_USER);
    this.router.navigate(['']);
  }

  redirectHomeUser(): void {
    const user = this.getUser();
    if (user) {
      if (user.rol === 'Administrador') {
        this.router.navigate(['auth/admin']);
      } else {
        this.router.navigate(['auth/coordinador']);
      }
    }
  }

}
