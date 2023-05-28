import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: "hauptseite", component: HauptseiteComponent },
  { path: "film/:type/:id", component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
