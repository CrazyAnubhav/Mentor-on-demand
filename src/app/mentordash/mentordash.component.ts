import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentordash',
  templateUrl: './mentordash.component.html',
  styleUrls: ['./mentordash.component.scss']
})
export class MentordashComponent implements OnInit {

  constructor(private router: Router) {
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      console.log('email logout');
      this.router.navigate(['/mentorLogIn']);
      // redirect to login page
    } else {
      console.log('email login' + email)
    }
   }

  ngOnInit() {
  }

}
