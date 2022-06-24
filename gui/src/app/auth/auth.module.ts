import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../modules/app-common.module';

const exampleRoutes: Route[] = [
 
  {
      path     : '',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(exampleRoutes),
    AppCommonModule
    
  ]
})
export class AuthModule { }
