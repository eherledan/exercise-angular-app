import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = 'http://www.omdbapi.com/?apikey=124f9ee0';
  constructor(private http: HttpClient) {

  }

  getFilm(film): Observable<any> {
    return this.http.get(this.url + '&t=' + film);
  }
}
