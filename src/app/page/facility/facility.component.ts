import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {
  modal : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  click(){
    this.modal = true;
  }
  closeModal() {
    this.modal = false;
  }
}
