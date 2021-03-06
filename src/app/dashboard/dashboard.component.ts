import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { 
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      console.log('email empty');
      this.router.navigate(['/studentLogIn']);
      // redirect to login page
    } else {
      console.log('email not empty' + email);
      // this.router.navigate(['/dashboard']);
      //localStorage.setItem('email',null);
      //console.log(email);
    }
  }

  ngOnInit() {
  }

}
