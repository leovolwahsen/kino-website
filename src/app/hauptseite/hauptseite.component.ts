import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hauptseite', 
  templateUrl: './hauptseite.component.html',
  styleUrls: ['./hauptseite.component.scss']
})
export class HauptseiteComponent implements OnInit {
  trendingeSerien: any;
  kinoFilme: any;
  beliebteFilme: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingeSerien();
    this.getKinoFilme();
    this.getBeliebteFilme();
  }

  getTrendingeSerien() {
    this.http
    .get("http://localhost:4200/assets/daten/trendinge-serien.json")
    .subscribe((filme) => {
      this.trendingeSerien = filme;
    });
  }

  getKinoFilme() {
    this.http
    .get("http://localhost:4200/assets/daten/kino-filme.json")
    .subscribe((filme) => {
      this.kinoFilme = filme;
    });
  }

  getBeliebteFilme() {
    this.http
    .get("http://localhost:4200/assets/daten/beliebte-filme.json")
    .subscribe((filme) => {
      this.beliebteFilme = filme;
    });
  }

  geheZumFilm(type: string, id: string) {
    this.router.navigate(["film", type, id]);
  }
}
