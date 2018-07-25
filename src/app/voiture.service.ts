import { Injectable } from '@angular/core';
import {Voiture} from './voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voitures: Voiture[] = [{id: 1, marque: 'Renault', nom: 'Twingo',  vitesse: 120, couleur: 'Rouge' },
    {id: 2, marque: 'Renault', nom: 'Mégane',  vitesse: 150, couleur: 'Verte' }];
  constructor() { }

  get() {
    return this.voitures;
  }

  getById(id) {
    return this.voitures.find(item => item.id == id);
  }
}
