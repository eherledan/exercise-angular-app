import { Component, OnInit } from '@angular/core';
import {Personnage} from '../personnage';

@Component({
  selector: 'app-role-play-list',
  templateUrl: './role-play-list.component.html',
  styleUrls: ['./role-play-list.component.css']
})
export class RolePlayListComponent implements OnInit {
  personnages = [{prenom: 'Jean', nom: 'Patafiol', age: 67, genre: 'homme', pointsVie: 100, attaque: 10, defense: 15, armure: 5},
    {prenom: 'Thierry', nom: 'Ancrage', age: 98, genre: 'homme', pointsVie: 120, attaque: 25, defense: 5, armure: 5},
    {prenom: 'Yvonne', nom: 'Lambet', age: 56, genre: 'femme', pointsVie: 150, attaque: 5, defense: 30, armure: 10}];
  genres: String[] = ['homme', 'femme', 'non-binaire'];
  prenom = '';
  nom = '';
  age = 0;
  ptsVie = 0;
  attaque = 0;
  defense = 0;
  armure = 0;
  selectedGenre = '';
  constructor() {
  }

  ngOnInit() {
  }

  addPlayer() {
    this.personnages.push(
      {prenom: this.prenom,
      nom: this.nom,
      age: this.age,
      genre: this.selectedGenre,
      pointsVie: this.ptsVie,
      attaque: this.attaque,
      defense: this.defense,
      armure: this.armure}
      );
  }
}


