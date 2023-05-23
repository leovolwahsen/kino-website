import { Component, OnInit } from '@angular/core';

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
    benutzername: "",
    passwort: ""
  };

  constructor() {  }

  ngOnInit(): void {
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

  }

}
