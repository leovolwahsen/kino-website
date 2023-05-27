import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hauptseite', 
  templateUrl: './hauptseite.component.html',
  styleUrls: ['./hauptseite.component.scss']
})
export class HauptseiteComponent implements OnInit {
  tendingeFilme: any;
  kinoFilme: any;
  beliebteFilme: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTendingeFilme();
    this.getKinoFilme();
    this.getBeliebteFilme();
  }

  getTendingeFilme() {
    this.http
    .get("http:/assets/daten/tendigefilme.json").subscribe((filme) => {
      this.tendingeFilme = filme;
    });
  }

  getKinoFilme() {
    this.http
    .get("http:/assets/daten/kinofilme.json").subscribe((filme) => {
      this.kinoFilme = filme;
    });
  }

  getBeliebteFilme() {
    this.http
    .get("http:/assets/daten/beliebtefilme.json").subscribe((filme) => {
      this.beliebteFilme = filme;
    });
  }

  geheZumFilm(type: string, id: string) {
    this.router.navigate(["film", type, id]);
  }
}
