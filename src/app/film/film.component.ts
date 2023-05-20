import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  type = "";
  id = "";
  url = "";
  filme: any;
  film: any;

  constructor(private route: ActivationEnd, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params["type"];
    this.id = this.route.snapshot.params["id"];
    if (this.type === "beliebt") {
      this.url = "http://localhost:4200/assets/data/beliebtefilme.json";
    }
    if (this.type === "kino") {
      this.url = "http://localhost:4200/assets/data/kinofilme.json";
    }
    if (this.type === "trendig") {
      this.url = "http://localhost:4200/assets/data/trendigefilme.json";
    }
    this.getFilm();
  }

  getFilm() {
    this.http.get(this.url).subscribe((filme) => {
      this.filme = filme;
      let index = this.filme.findIndex(
        (film: { id: string }) => film.id == this.id
        );
        if(index > -1) {
          this.film = this.filme[index];
        }
    });
  }
}
