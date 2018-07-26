import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonsCaptures: any[] = [];
  res: any[] = [];
  constructor(private pokemonService: PokemonService, public snackBar: MatSnackBar) {
  }

  getPokemon(id) {
    this.pokemonService.getPokemon(id).subscribe(
      data => {
        this.res.push(data);
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

  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  capturerPokemon(pokemon) {
    this.openSnackBar('Tentative de capture sur ' + pokemon.name, 'OK', 5000);
    setTimeout(() => {
      const d = Math.random() * 100;
      if (d < 45) {
        this.pokemonsCaptures.push(pokemon);
        this.res = this.res.filter(obj => obj !== pokemon);
        this.openSnackBar(pokemon.name + ' a été capturé.', 'OK', 2000);
      } else {
        this.openSnackBar('Oh non, la tentative de capture de ' + pokemon.name + ' a échoué.', 'OK', 2000);
      }
    }, 5000);
  }

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.getPokemon(i);
    }
  }

}
