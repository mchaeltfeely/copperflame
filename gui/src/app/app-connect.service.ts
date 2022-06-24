import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssessSubject } from './dashboard/models/AssessScore.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConnectService {

  public subjects:AssessSubject[];

  constructor(public http:HttpClient) {
      
  }

  private GetSubjectsDataFromServer () {
    return this.http.get<AssessSubject[]>(environment.api);  
  }

  public getSubjects(){
    this.GetSubjectsDataFromServer().subscribe((res:AssessSubject[])=>{
      this.subjects = res;
     
    });
  }

  check(): Observable<boolean>
  {
    const token = localStorage.getItem('token');
    if (token){
      return of(true);
    }

    return of(false);
  }

  signIn(){

    return this.http.post(environment.authApi, {});

  }

  signOut(){
    localStorage.removeItem('token');
  }

}
