import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'courses',component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
