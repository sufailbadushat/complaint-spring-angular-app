import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-logi',
  templateUrl: './user-logi.component.html',
  styleUrls: ['./user-logi.component.css']
})
export class UserLogiComponent {
  constructor(private api:ApiService, private route:Router){}

  username=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }

    console.log(data);

    this.api.userLogin(data).subscribe(
      (response:any)=>{
        if (response.status == "success") {
          console.log(data);
          let userId=response.id
          localStorage.setItem("userId",userId)
          console.log(userId);          
          this.route.navigate([('/addComplaint')])
        } else {
          alert("Please enter correct credentials!");
        }
      }
    )
    
  }
} 
