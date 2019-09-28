import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  email;
  password;
  error_message = ""

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  submit_form_data(form){
    console.log("email : " + form.email);
    console.log("password : " + form.password);

    var body = "email=" + form.email 
        + "&password=" + form.password;
	
let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

this.http.post("http://localhost:3000/user/check", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        // localStorage.setItem('qualification', 'MCA');
        // localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
        if(result == 'Invalid User'){
          this.error_message = "Invalid User"
        } else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
          localStorage.setItem('token', result);
          localStorage.setItem('email', form.email);
          //this.error_message = ""
          //this.error_message = result;
          location.reload();
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

}
