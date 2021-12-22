import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.scss']
})
export class NoticeDetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  moveNotice() {
    this.router.navigate(['main/news/notice'])
  }
}
