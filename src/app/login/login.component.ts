import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  benutzername = "";
  password = "";
  errorMsg = "";
  
  constructor(private auth: AuthService, private router: Router) {  }

  ngOnInit(): void {
  }

  login() {
    if (this.benutzername.trim().length === 0) {
      this.errorMsg = "Benutzername angeben";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Passwort angeben";
    } else {
      this.errorMsg = "";
      let ergebniss = this.auth.login(this.benutzername, this.password);
      if(ergebniss === 200) {
        this.router.navigate(["hauptseite"])
      }
      if(ergebniss === 403) {
        this.errorMsg = "Ungültige Anmeldeinformationen"
      }
    }
  }
}
