import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssessSubject } from './dashboard/models/AssessScore.models';
import { Observable, of } from 'rxjs';

/*
  AppConnectService is injected into each of the componets
  and prefroms a lot of the grunt work;
  
  
*/

@Injectable({
  providedIn: 'root'
})
export class AppConnectService {

  public subjects:AssessSubject[];

  constructor(public http:HttpClient) {
      
  }

  /* get the data from server -- the http interceptor will get called for token */
  private GetSubjectsDataFromServer () {
    return this.http.get<AssessSubject[]>(environment.api);  
  }

  /* access the subjects from and store them in the local service */
  public getSubjects(){
    this.GetSubjectsDataFromServer().subscribe((res:AssessSubject[])=>{
      this.subjects = res;
    });
  }

  /* check whether the user is logged in or not */
  check(): Observable<boolean>
  {
    const token = localStorage.getItem('token');
    if (token){
      return of(true);
    }

    return of(false);
  }

  /* sign the user in */
  signIn(){
    return this.http.post(environment.authApi, {});
  }

  /* sign the user out */
  signOut(){
    localStorage.removeItem('token');
  }

}
