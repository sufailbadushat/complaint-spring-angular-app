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
        if (response.length != 0) {
          console.log(data);
          alert("login successfull");
          this.route.navigate([('/profile')])
        } else {
          alert("Please enter correct credentials!");
        }
      }
    )
    
  }
}
