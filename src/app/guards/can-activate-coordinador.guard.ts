import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class CanActivateCoordinadorGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(): boolean {
    const user = this.authService.getUser();
    if (user) {
      if (user.rol !== 'Coordinador') {
        this.authService.redirectHomeUser();
        return false;
      }
    }
    return true;
  }

}
