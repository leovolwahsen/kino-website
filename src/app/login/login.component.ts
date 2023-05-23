import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  alleRegistrierteNutzer: any[] = [];

  registrierteObj: any = {
    benutzername: "",
    email: "",
    passwort: ""
  };

  einloggenObj: any = {
    email: "",
    passwort: ""
  };

  constructor(public auth: AuthService, public router: Router) { 

   }

  ngOnInit(): void {

    const gespeicherteLokaleDaten = localStorage.getItem("alleRegistrierteNutzer");
    if (gespeicherteLokaleDaten != null) {
      this.alleRegistrierteNutzer = JSON.parse(gespeicherteLokaleDaten);
    }
  }

  beiRegistrierung() {
    this.alleRegistrierteNutzer.push(this.registrierteObj);
    localStorage.setItem("alleRegistrierteNutzer", JSON.stringify(this.alleRegistrierteNutzer));
    this.registrierteObj = {
      benutzername: "",
      email: "",
      passwort: ""
    };
  }

  beiEinloggen() {
    const existiertBenutzerKonto = this.alleRegistrierteNutzer.find(m => m.email == this.einloggenObj.email && m.passwort == this.einloggenObj.passwort);
    if (existiertBenutzerKonto != undefined) {
      alert("Nutzer ist erfolgreich eingeloggt.");
    } else {
      alert("Falsche Nutzerdaten wurden eingegeben, mitte versuchen Sie es erneut.");
    }

  }

}
