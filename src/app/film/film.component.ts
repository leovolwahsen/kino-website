import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';
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


  constructor(private route: ActivatedRoute, private http: HttpClient, private hostElement: ElementRef) { }

  ngOnInit(): void {
    
    this.type = this.route.snapshot.params["type"];
    this.id = this.route.snapshot.params["id"];
    if (this.type === "beliebt") {
      this.url = "http://localhost:4200/assets/daten/beliebte-filme.json";
    }
    if (this.type === "kino") {
      this.url = "http://localhost:4200/assets/daten/kino-filme.json";
    }
    if (this.type === "trendig") {
      this.url = "http://localhost:4200/assets/daten/trendinge-filme.json";
    }
    this.getFilm();
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = 'https://www.youtube.com/embed/b_yvKh_ps18';
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
