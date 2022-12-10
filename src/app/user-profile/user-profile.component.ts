import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  id: any = ""
  constructor(private api: ApiService) {
    this.id = localStorage.getItem("userId");
    let data: any = { "id": this.id }

    api.userProfile(data).subscribe(
      (response: any) => {
        this.profile = response
      }
    )

  }
  profile: any = []
}
