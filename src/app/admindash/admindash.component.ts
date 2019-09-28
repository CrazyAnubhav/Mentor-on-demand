import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {
  constructor(private router: Router) {
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      console.log('email empty');
      this.router.navigate(['/adminLogIn']);
      // redirect to login page
    } else {
      console.log('email not empty' + email)
    }
   }

  ngOnInit() {
  }
}
