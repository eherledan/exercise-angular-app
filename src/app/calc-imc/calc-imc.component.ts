import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css']
})
export class CalcImcComponent implements OnInit {
  taille: number;
  poids: number;
  res: number;
  constructor() { }

  ngOnInit() {
  }

  calculateIMC() {
    this.res = this.poids / (this.taille * this.taille) * 10000;
  }
}
