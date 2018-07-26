import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {

  }
  getPokemon(id): Observable<any> {
    return this.http.get(this.url + id + '/');
  }
}
