import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserCoordinadorComponent} from './coordinador/user-coordinador.component';
import {LayoutAdminComponent} from './admin/layout-admin/layout-admin.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './guards/auth.guard';
import {LogoutGuard} from './guards/logout.guard';
import {CanActivateAdminGuard} from './guards/can-activate-admin.guard';
import {CanActivateCoordinadorGuard} from './guards/can-activate-coordinador.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'auth',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: LayoutAdminComponent,
        canActivate: [CanActivateAdminGuard]
      },
      {
        path: 'coordinador',
        component: UserCoordinadorComponent,
        canActivate: [CanActivateCoordinadorGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
