import { Component, OnInit } from '@angular/core';
import { User } from '../models/userdetail';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  UserDetails : User = {username: "", password: ""};
  name : string ="Enter user id and password";
  flag : boolean = false;

  authenticate(){
    console.log(this.UserDetails);
    this.loginService.authenticate(this.UserDetails).subscribe(
      data=>{
        this.name=data;
        this.flag=true;
        console.log(data);
      },
      error=>{
          this.flag=false;
          console.log(error);
      }
    );
    
  }

}
