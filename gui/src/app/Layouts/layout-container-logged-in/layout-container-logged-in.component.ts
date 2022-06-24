import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppConnectService } from 'src/app/app-connect.service';
@Component({
  selector: 'app-layout-container-logged-in',
  templateUrl: './layout-container-logged-in.component.html',
  styleUrls: ['./layout-container-logged-in.component.scss']
})
export class LayoutContainerLoggedInComponent implements OnInit {
  isScreenSmall = false;
  showMenu=true;
  constructor(public as:AppConnectService, private _router:Router) { }

  ngOnInit(): void {
  }


  signOut(){
    this.as.signOut();
    this._router.navigateByUrl("/login");
  } 

}
