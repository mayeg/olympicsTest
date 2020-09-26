import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import { ListWinnersComponent } from './admin/list-winners/list-winners.component';
import { LayoutComponent } from './layout/layout.component';
import {OlympicService} from './services/olympic.service';
import {HttpClientModule} from '@angular/common/http';
import {UserCoordinadorComponent} from './coordinador/user-coordinador.component';
import { CategoryComponent } from './admin/category/category.component';
import {LoadingComponent} from './loading/loading.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import {AuthGuard} from './guards/auth.guard';
import {LogoutGuard} from './guards/logout.guard';
import {AuthService} from './services/auth.service';
import {CanActivateAdminGuard} from './guards/can-activate-admin.guard';
import {CanActivateCoordinadorGuard} from './guards/can-activate-coordinador.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListWinnersComponent,
    UserCoordinadorComponent,
    LayoutComponent,
    CategoryComponent,
    LoadingComponent,
    LayoutAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    HttpClientModule,
  ],
  providers: [OlympicService, AuthGuard, LogoutGuard, AuthService, CanActivateAdminGuard, CanActivateCoordinadorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
