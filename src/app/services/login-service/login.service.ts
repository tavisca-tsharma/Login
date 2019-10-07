import { Injectable } from '@angular/core';
import { User } from 'src/app/models/userdetail';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(userDetails: User)
  {
    console.log(userDetails);
    return this.http.post<string>("https://localhost:44395/api/sign", userDetails);
  }
}
