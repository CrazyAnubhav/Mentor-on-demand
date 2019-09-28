import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  email;
  password;
  error_message = ""

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  submit_form_data(form){
    //console.log("email : " + form.email);
    console.log("password : " + form.password);

    var body = "password=" + form.password;
    // "email=" + form.email 
	
let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

this.http.post("http://localhost:3000/admin/check", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        if(result == 'Invalid User'){
          this.error_message = "Invalid User"
        } else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
          localStorage.setItem('token', result);
          localStorage.setItem('email', form.password);
          location.reload();
          this.router.navigate(['/admindash']);
        }
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
}
