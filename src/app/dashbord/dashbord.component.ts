import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  constructor(private api:ApiService){
    api.viewAllComplaint().subscribe(
      (response:any)=>{
        this.allComplaints=response
      }
    )
  }

  allComplaints:any=[]
}
