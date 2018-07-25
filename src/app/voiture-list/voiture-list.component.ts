import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../voiture.service';
import {Voiture} from '../voiture';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
  voitures: Voiture[];
  constructor(voitureService: VoitureService) {
    this.voitures = voitureService.get();
  }

  ngOnInit() {
  }

}
