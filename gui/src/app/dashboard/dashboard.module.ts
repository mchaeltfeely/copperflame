import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectSummaryComponent } from './subject-summary/subject-summary.component';
import { Route, RouterModule } from '@angular/router';

import { SubjectDashboardComponent } from './subject-dashboard/subject-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppCommonModule } from '../modules/app-common.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';



const exampleRoutes: Route[] = [
  {path: '', pathMatch : 'full', redirectTo: 'SubjectDashboard'},
  {
      path     : 'SubjectDashboard',
      component: SubjectDashboardComponent
  }
];

@NgModule({
  declarations: [
    SubjectSummaryComponent,
    SubjectDashboardComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
    NgApexchartsModule,
    AppCommonModule
  ]
})
export class DashboardModule { }
