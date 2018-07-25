import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../voiture.service';
import {Voiture} from '../voiture';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-voiture-desc',
  templateUrl: './voiture-desc.component.html',
  styleUrls: ['./voiture-desc.component.css']
})
export class VoitureDescComponent implements OnInit {
  voiture: Voiture;

  constructor(voitureService: VoitureService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    this.voiture = voitureService.getById(id);
  }

  ngOnInit() {
  }
}
