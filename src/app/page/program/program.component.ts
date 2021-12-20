import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  movePersonal() {
    this.router.navigate(['main/program/personal'])
  }
  moveWeekday() {
    this.router.navigate(['main/program/weekday'])
  }
  moveWeekend(){
    this.router.navigate(['main/program/weekend'])
  }
}
