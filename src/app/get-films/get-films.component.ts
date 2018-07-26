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
  res: any[] = [];
  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  getFilm() {
    this.filmService.getFilm(this.film).subscribe(
      data => {
        this.res.push(data);
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
