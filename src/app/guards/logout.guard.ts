import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class LogoutGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(): boolean {
    const user = this.authService.getUser();
    if (user) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
