import { LayoutContainerBlankComponent } from './Layouts/layout-container-blank/layout-container-blank.component';
import { LayoutContainerLoggedInComponent } from './Layouts/layout-container-logged-in/layout-container-logged-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes, ExtraOptions, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

/**
 * main root router object
 * 
 * there are 2 routes  dashboard and login
 * 
 * the dashboard route is protected by "AuthGuard" 
 * and will redirect the user the login route.
 * 
 * the dashboard route will load a different layout component 
 * which will include a menu and user profile screen.
 */

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  useHash: true
};

export const appRoutes: Route[] = [
          {path: '', pathMatch : 'full', redirectTo: 'dashboard'},
          {
            path       : 'dashboard',
            canActivate: [AuthGuard],
            canActivateChild: [AuthGuard],
            component  : LayoutContainerLoggedInComponent,
            //resolve    : {
            //    initialData: InitialDataResolver,
            //},
            loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule)     
        },
        {
          path       : 'login',
          //canActivate: [AuthGuard],
          //canActivateChild: [AuthGuard],
          component  : LayoutContainerBlankComponent,
          //resolve    : {
          //    initialData: InitialDataResolver,
          //},
          loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)     
      },
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes,routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
