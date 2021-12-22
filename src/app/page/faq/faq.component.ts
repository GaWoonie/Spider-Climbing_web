import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  Q1:boolean = false;
  Q2:boolean = false;
  Q3:boolean = false;
  Q4:boolean = false;
  Q5:boolean = false;
  Q6:boolean = false;
  Q7:boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  //답변 여는 함수
  openQ1(){
  if(this.Q1==false){
    this.Q1=true
    this.Q2=false
    this.Q3=false
    this.Q4=false
    this.Q5=false
    this.Q6=false
    this.Q7=false
  } else {
    this.Q1=false
  }
  }

  openQ2() {
  if(this.Q2==false){
    this.Q1=false;
    this.Q2=true;
    this.Q3=false
    this.Q4=false
    this.Q5=false
    this.Q6=false
    this.Q7=false
    } else {
      this.Q2=false
    }
  }

  openQ3(){
    if(this.Q3==false){
      this.Q1=false
      this.Q2=false
      this.Q3=true
      this.Q4=false
      this.Q5=false
      this.Q6=false
      this.Q7=false
    } else {
      this.Q3=false
    }
  }
  openQ4(){
    if(this.Q4==false){
      this.Q1=false
      this.Q2=false
      this.Q3=false
      this.Q4=true
      this.Q5=false
      this.Q6=false
      this.Q7=false
    } else {
      this.Q4=false
    }
  }
  openQ5(){
    if(this.Q5==false){
      this.Q1=false
      this.Q2=false
      this.Q3=false
      this.Q4=false
      this.Q5=true
      this.Q6=false
      this.Q7=false
    } else {
      this.Q5=false
    }
  }
  openQ6(){
    if(this.Q6==false){
      this.Q1=false
      this.Q2=false
      this.Q3=false
      this.Q4=false
      this.Q5=false
      this.Q6=true
      this.Q7=false
    } else {
      this.Q6=false
    }
  }
  openQ7(){
    if(this.Q7==false){
      this.Q1=false
      this.Q2=false
      this.Q3=false
      this.Q4=false
      this.Q5=false
      this.Q6=false
      this.Q7=true
    } else {
      this.Q7=false
    }
  }
}
