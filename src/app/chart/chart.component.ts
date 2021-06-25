import { Component, OnInit } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts'; 
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  title="chart"
  type:any = 'PieChart';  
  data = [  
     ['Name1', 5.0],  
     ['Name2', 36.8],  
     ['Name3', 42.8],  
     ['Name4', 18.5],  
     ['Name5', 16.2]  
  ];  
  columnNames:any = ['Name', 'Percentage'];  
  options = {  
   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true};
  width = 500;  
  height = 300;
  backgroundColor = ' #44556';  
  constructor() { }

  ngOnInit(): void {
  }

}
