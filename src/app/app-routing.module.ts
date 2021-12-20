import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from "./page/main/main.component";
import { ProgramComponent } from "./page/program/program.component";
import { LocationComponent } from "./page/location/location.component";
import { InstructorComponent } from "./page/instructor/instructor.component";
import { NoticeComponent } from "./page/notice/notice.component";
import { FacilityComponent} from "./page/facility/facility.component";
import { FaqComponent } from "./page/faq/faq.component";
import { NoticeDetailComponent } from "./page/notice-detail/notice-detail.component";
import { GalleryComponent } from "./page/gallery/gallery.component";
import { PersonalComponent} from "./page/program/personal/personal.component";
import { WeekDayComponent} from "./page/program/week-day/week-day.component";
import { WeekendComponent} from "./page/program/weekend/weekend.component";
import { MainHeaderComponent } from "./page/main-header/main-header.component";
import { MainFooterComponent } from "./page/main-footer/main-footer.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'main/location', component: LocationComponent},
  { path: 'main/program', component: ProgramComponent},
  { path: 'main/instructor', component: InstructorComponent},
  { path: 'main/facility', component: FacilityComponent},
  { path: 'main/news/faqService', component: FaqComponent},
  { path: 'main/news/notice', component: NoticeComponent},
  { path: 'main/news/notice/detail', component: NoticeDetailComponent},
  { path: 'main/news/gallery', component: GalleryComponent},
  { path: 'main/program/personal', component: PersonalComponent},
  { path: 'main/program/weekday', component: WeekDayComponent},
  { path: 'main/program/weekend', component: WeekendComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
