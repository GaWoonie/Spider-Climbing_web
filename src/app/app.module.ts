import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { InstructorComponent } from './page/instructor/instructor.component';
import { NoticeComponent } from './page/notice/notice.component';
import { ProgramComponent } from './page/program/program.component';
import { LocationComponent } from './page/location/location.component';
import { MainHeaderComponent } from './page/main-header/main-header.component';
import { MainFooterComponent } from './page/main-footer/main-footer.component';
import {CommonModule} from "@angular/common";
import { FacilityComponent } from './page/facility/facility.component';
import { FaqComponent } from './page/faq/faq.component';
import { NoticeDetailComponent } from './page/notice-detail/notice-detail.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { PersonalComponent } from './page/program/personal/personal.component';
import { WeekDayComponent } from './page/program/week-day/week-day.component';
import { WeekendComponent } from './page/program/weekend/weekend.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InstructorComponent,
    NoticeComponent,
    ProgramComponent,
    LocationComponent,
    MainHeaderComponent,
    MainFooterComponent,
    FacilityComponent,
    FaqComponent,
    NoticeDetailComponent,
    GalleryComponent,
    PersonalComponent,
    WeekDayComponent,
    WeekendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
