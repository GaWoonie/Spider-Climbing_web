import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.scss']
})
export class WeekendComponent implements OnInit {
  Q1 : boolean = false;
  Q2 : boolean = false;
  Q3 : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openAnswer1(){
    if(this.Q1==false){
      this.Q1=true;
      this.Q2=false;
      this.Q3=false;
    }
    else {
      this.Q1 =false
    }
  }
  openAnswer2(){
    if(this.Q2==false){
      this.Q1=false;
      this.Q2=true;
      this.Q3=false;
    }
    else{
      this.Q2 = false
    }
  }
  openAnswer3(){
    if(this.Q3==false){
      this.Q1=false;
      this.Q2=false;
      this.Q3=true;
    }
    else {
      this.Q3 = false
    }
  }
}
