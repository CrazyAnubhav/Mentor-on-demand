import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show:boolean=true;
  error_message = "";


  constructor() {
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      this.show=false;// this.show=false;
    } else {
      this.show=true;
    }
  }
 

  ngOnInit() {
  }

}
