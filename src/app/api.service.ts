import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userReg=(data:any)=>{
    return this.http.post("http://localhost:8080/userReg",data);
  }

  userLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/userLogin",data);
  }
}
