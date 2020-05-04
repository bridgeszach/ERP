import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent {
  userName = "";
  password = "";
  allUsers = [];
  loginError = false;
  loginCorrect = false;

  constructor(private data: DataService, private router: Router, private shared: SharedService) {
    // get users
    this.allUsers = data.userList
  }

  login() {
    // travel the list of user/ compare user credentials with values from the form
    var found = false;

    for (let i = 0; i < this.allUsers.length; i++){
      var user = this.allUsers[i];
      if (user.userName.toLowerCase() == this.userName.toLowerCase() && user.password == this.password) {
        console.log('logged in correctly!');
        found = true;
        this.loginCorrect = true;
        setTimeout(() => this.loginCorrect = false, 2000)

        this.shared.isUserLoggedIn = true;
        this.shared.userName = user.userName;
        // send user to reg page
        this.router.navigate(['/user/list']);        
      }
      
      if (!found) {
        console.error("wrong credentials!!");
        this.loginError = true;
        setTimeout(() => this.loginError = false, 2000)
      }
    }
  }
}