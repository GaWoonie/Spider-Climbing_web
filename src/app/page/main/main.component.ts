import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  park : boolean |undefined = true;
  hong : boolean |undefined = true;
  young : boolean |undefined = true;
  lee : boolean |undefined = true;
  oh : boolean |undefined = true;
  modalPark : boolean |undefined = false;
  modalHong : boolean |undefined = false;
  modalYoung : boolean |undefined = false;
  modalLee : boolean |undefined = false;
  modalOh : boolean |undefined = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickPark() {
    this.modalPark = true;
}
  clickHong() {
    this.modalHong = true;
  }
  clickYoung() {
    this.modalYoung = true;
  }
  clickLee() {
    this.modalLee = true;
  }
  clickOh() {
    this.modalOh = true;
  }

  closeModal() {
    this.modalPark = false;
    this.modalHong = false;
    this.modalYoung = false;
    this.modalLee = false;
    this.modalOh = false;
  }
}
