import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FilmService} from '../film.service';

@Component({
  selector: 'app-get-films',
  templateUrl: './get-films.component.html',
  styleUrls: ['./get-films.component.css']
})
export class GetFilmsComponent implements OnInit {
  film: string;
  res: string[] = [];
  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  getFilm() {
    this.filmService.getFilm(this.film).subscribe(
      data => {
        const film = JSON.stringify(data, null, 4);
        this.res.push(film);
        this.film = '';
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log('Backend returned status code: ', err.status);
          console.log('Response body: ', err.error);
        }
      }
    );
  }


}
