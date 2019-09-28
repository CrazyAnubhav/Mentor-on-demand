import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.scss']
})
export class MentorsignupComponent implements OnInit {

  firstname;
  lastname;
  email;
  password;
  message='';

  log(x) {console.log(x);}

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit_form_data(form){
    console.log("firstname : " + form.firstname);
    console.log("lastname : " + form.lastname);
    console.log("email : " + form.email);
    console.log("password : " + form.password);

    var body = "firstname=" + form.firstname
        + "&lastname=" + form.lastname
        + "&email=" + form.email 
        + "&password=" + form.password;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/mentor/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You have successfully registered!"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}