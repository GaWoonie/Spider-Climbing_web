import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from "./page/main/main.component";
import { ProgramComponent } from "./page/program/program.component";
import { LocationComponent } from "./page/location/location.component";
import { InstructorComponent } from "./page/instructor/instructor.component";
import { NoticeComponent } from "./page/notice/notice.component";
import { FacilityComponent} from "./page/facility/facility.component";
import { FaqComponent } from "./page/faq/faq.component";
import { MainHeaderComponent } from "./page/main-header/main-header.component";
import { MainFooterComponent } from "./page/main-footer/main-footer.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'main/location', component: LocationComponent},
  { path: 'main/notice', component: NoticeComponent},
  { path: 'main/program', component: ProgramComponent},
  { path: 'main/instructor', component: InstructorComponent},
  { path: 'main/facility', component: FacilityComponent},
  { path: 'main/faqService', component: FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
