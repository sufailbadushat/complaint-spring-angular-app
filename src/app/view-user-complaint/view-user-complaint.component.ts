import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-complaint',
  templateUrl: './view-user-complaint.component.html',
  styleUrls: ['./view-user-complaint.component.css']
})
export class ViewUserComplaintComponent {
  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userId")
    let data:any={"userId":this.userId}
    console.log(data);
    api.viewMyComplaint(data).subscribe(
      (response:any)=>{
        console.log(response);
        this.myComplaint=response
      }
    )
    

  }

  myComplaint:any=[]

}
