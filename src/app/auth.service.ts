import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(email: string, password: string): boolean {
    // Retrieve the stored email and password from the local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the provided email and password match the stored values
    if (email === storedEmail && password === storedPassword) {
      return true; // Authentication successful
    }

    return false; // Authentication failed
  }
}
