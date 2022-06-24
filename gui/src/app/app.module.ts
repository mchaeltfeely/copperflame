import { LayoutContainerBlankComponent } from './Layouts/layout-container-blank/layout-container-blank.component';
import { LayoutContainerLoggedInComponent } from './Layouts/layout-container-logged-in/layout-container-logged-in.component';
import { AppCommonModule } from './modules/app-common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, LayoutContainerLoggedInComponent,LayoutContainerBlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
