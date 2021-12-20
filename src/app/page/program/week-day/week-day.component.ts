import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss']
})
export class WeekDayComponent implements OnInit {
  Q1 : boolean = false;
  Q2 : boolean = false;
  Q3 : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openAnswer1(){
    if(this.Q1==false){
      this.Q1=true;
    }
    else {
      this.Q1 =false
    }
  }
  openAnswer2(){
    if(this.Q2==false){
      this.Q2 = true;
    }
    else{
      this.Q2 = false
    }
  }
  openAnswer3(){
    if(this.Q3==false){
      this.Q3 = true
    }
    else {
      this.Q3 = false
    }
  }
}
