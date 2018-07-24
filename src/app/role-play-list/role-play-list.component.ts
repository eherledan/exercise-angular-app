import { Component, OnInit } from '@angular/core';
import {Personnage} from '../personnage';

@Component({
  selector: 'app-role-play-list',
  templateUrl: './role-play-list.component.html',
  styleUrls: ['./role-play-list.component.css']
})
export class RolePlayListComponent implements OnInit {


  personnages: Personnage[] = [{prenom: 'Jean', nom: 'Patafiol', age: 67, genre: 'homme', pointsVie: 100, attaque: 10, defense: 15, armure: 5},
    {prenom: 'Thierry', nom: 'Ancrage', age: 98, genre: 'homme', pointsVie: 120, attaque: 25, defense: 5, armure: 5},
    {prenom: 'Yvonne', nom: 'Lambet', age: 56, genre: 'femme', pointsVie: 150, attaque: 5, defense: 30, armure: 10}];
  constructor() {
  }

  ngOnInit() {
  }

}
