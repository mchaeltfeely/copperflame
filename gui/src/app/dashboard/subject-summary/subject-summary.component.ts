import { SubjectDashboardComponent } from './../subject-dashboard/subject-dashboard.component';
import { AssessScore, AssessSubject } from './../models/AssessScore.models';
import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { AppConnectService } from 'src/app/app-connect.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-subject-summary',
  templateUrl: './subject-summary.component.html',
  styleUrls: ['./subject-summary.component.scss']
})
export class SubjectSummaryComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> |any;
  private _subjectName:string;
  public showChart:boolean = false;


  displayedColumns: string[] = ['year', 'season', 'value'];
  dataSource:any = [];

  
  get SubjectName(): string {
      return this._subjectName;
  }
  @Input() set SubjectName(value: string) {
      this._subjectName = value;
      this.assessSubject = this.as.subjects.find(sub => sub.subject === this.SubjectName);

      if (this.assessSubject != null){
        this.showChart = true;
        this.setupChart();
      }
      
      
  }


  public assessSubject:AssessSubject|undefined;


  constructor(private as:AppConnectService) {
    
  }

  ngOnInit(): void {
    
    
  }

  public setupChart() {


    this.dataSource = this.assessSubject?.scores;

    var data:chartSeriesData[] = [];
    var xSeries:string[] = [];

    const season = this.assessSubject?.scores.filter(
      (thing, i, arr) => arr.findIndex(t => t.season === thing.season) === i
    );

    const years = this.assessSubject?.scores.filter(
      (thing, i, arr) => arr.findIndex(t => t.year === thing.year) === i
    );

    years?.forEach((score:AssessScore, index:number) =>{
      if (data.findIndex(series => series.name === score.year.toString()) < 1){
        var cs = new chartSeriesData();
        cs.name = score.year.toString();
        cs.data = [];

        this.assessSubject?.scores.filter(s => s.year === score.year).forEach((res) =>{
          cs.data.push(res.value);
        });

        data.push(cs);
        

      }
    })
    season?.forEach((score:AssessScore, index:number)=>{
      xSeries.push(score.season)
    });

    this.chartOptions = {
      series: data,

      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: this._subjectName
      },
      
      xaxis: {
        categories: xSeries
      }
      
    };
    
  }
}


export class chartSeriesData{
    public name :string;
    public data: Number[];
}

