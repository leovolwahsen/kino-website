import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-oben',
  templateUrl: './oben.component.html',
  styleUrls: ['./oben.component.scss']
})
export class ObenComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {  }

  ngOnInit(): void {  }

  geheZurHauptseite() {
    this.router.navigate(["hauptseite"])
  }

  logout() {
    this.auth.logout();
  }
}
