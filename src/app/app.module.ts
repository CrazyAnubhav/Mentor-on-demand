import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { MeanstackComponent } from './meanstack/meanstack.component';
import { JavaComponent } from './java/java.component';
import { AspComponent } from './asp/asp.component';
import { MernComponent } from './mern/mern.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MentordashComponent } from './mentordash/mentordash.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { LogoutComponent } from './logout/logout.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    MentorLoginComponent,
    MeanstackComponent,
    JavaComponent,
    AspComponent,
    MernComponent,
    ContactsComponent,
    AboutComponent,
    CourseComponent,
    DashboardComponent,
    MentordashComponent,
    MentorsignupComponent,
    AdmindashComponent,
    LogoutComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
