import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-regi',
  templateUrl: './user-regi.component.html',
  styleUrls: ['./user-regi.component.css']
})
export class UserRegiComponent {

  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""
  cPassword = ""

  constructor(private api: ApiService) { }

  readValue = () => {
    let data: any = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password,
      "cPassword": this.cPassword
    }

    if (this.password.length != 0) {
      if (this.password == this.cPassword) {
        this.api.userReg(data).subscribe(
          (response: any) => {
            if (response.status == "success") {
              alert("Registerd successfully! \n\n goto login page");
              console.log(response);
              console.log(data);

              this.name = ""
              this.address = ""
              this.email = ""
              this.phone = ""
              this.username = ""
              this.password = ""
              this.cPassword = ""


            } else {
              alert("Something went wrong!");
            }
          }
        )
      } else {
        alert("Please enter same password");
      }
    } else {
      alert("Please enter password")
    }


  }

}
