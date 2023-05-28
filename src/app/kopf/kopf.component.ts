import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kopf',
  templateUrl: './kopf.component.html',
  styleUrls: ['./kopf.component.scss']
})
export class KopfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  geheZurHauptseite() {
    this.router.navigate(["hauptseite"]);
  }

}
