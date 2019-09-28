import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { MeanstackComponent } from './meanstack/meanstack.component';
import { JavaComponent } from './java/java.component';
import { AspComponent } from './asp/asp.component';
import { MernComponent } from './mern/mern.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MentordashComponent } from './mentordash/mentordash.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { LogoutComponent } from './logout/logout.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {path:'mentorLogIn', component:MentorLoginComponent},
  {path:'studentLogIn', component:StudentLoginComponent},
  {path:'adminLogIn', component:AdminLoginComponent},
  {path:'studentSignUp', component:SignupComponent},
  {path:'meanstack', component:MeanstackComponent},
  {path:'java', component:JavaComponent},
  {path:'asp', component:AspComponent},
  {path:'mern', component:MernComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'about', component:AboutComponent},
  {path:'course', component:CourseComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'mentordash', component:MentordashComponent},
  {path:'logout', component:LogoutComponent},
  {path:'admindash', component:AdmindashComponent},
  {path:'mentorsignup', component:MentorsignupComponent},
  {path:'', component:AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

