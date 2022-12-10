import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  userId:any=""
  
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userId");
    let data:any={"id":this.userId}

    api.userProfile(data).subscribe(
      (response:any)=>{
        this.profile=response
      }
    )
  }
  profile:any=[]
}
