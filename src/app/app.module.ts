import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KopfComponent } from './kopf/kopf.component';

@NgModule({
  declarations: [
    AppComponent,
    HauptseiteComponent,
    FilmComponent,
    KopfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
