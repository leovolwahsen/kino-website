import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-hauptseite',
  templateUrl: './hauptseite.component.html',
  styleUrls: ['./hauptseite.component.scss']
})
export class HauptseiteComponent implements OnInit {

  tendingeFilme: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTendingeFilme();
  }

  getTendingeFilme() {
    this.http.get("http:/assets/daten/tendigefilme.json").subscribe((filme) => {
      this.tendingeFilme = filme;
      console.log(this.tendingeFilme)
      
    });
  }
}
