import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(benutzername: string, password: string) {
    if (benutzername === "leo" && password === "1234") {
      return 200;
    } else {
      return 403;
    }
  }
}
