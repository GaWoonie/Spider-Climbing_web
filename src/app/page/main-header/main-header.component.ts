import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  submenu : boolean |undefined = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openMenu() {
    if(this.submenu == true){
      this.submenu = false;
    }else{
      this.submenu = true
    }
  }

  //페이지 이동
  moveLocation(){
    this.router.navigate(['main/location'])
  }
  moveMain(){
    this.router.navigate(['main'])
  }
  moveInstructor(){
    this.router.navigate(['/main/instructor'])
  }
  moveFacility() {
    this.router.navigate(['main/facility'])
  }
  moveProgram() {
    this.router.navigate(['main/program'])
  }
  moveNotice() {
    this.router.navigate(['main/notice'])
  }
  moveFaq() {
    this.router.navigate(['main/faqService'])
  }

}
