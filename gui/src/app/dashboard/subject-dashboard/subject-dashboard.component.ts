import { AppConnectService } from 'src/app/app-connect.service';
import { Component, OnInit } from '@angular/core';
import { AssessSubject } from '../models/AssessScore.models';

@Component({
  selector: 'app-subject-dashboard',
  templateUrl: './subject-dashboard.component.html',
  styleUrls: ['./subject-dashboard.component.scss']
})
export class SubjectDashboardComponent implements OnInit {


  constructor(public ac:AppConnectService) { }

  ngOnInit(): void {
    this.ac.getSubjects();
    
    
  }

}
