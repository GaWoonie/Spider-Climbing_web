import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  moveDetail() {
    this.router.navigate(['main/news/notice/detail'])
  }
}
