export class Voiture {
  id: number;
  marque: string;
  nom: string;
  vitesse: number;
  couleur: string;

  constructor(id: number, marque: string, nom: string, vitesse: number, couleur: string) {
    this.id = id;
    this.marque = marque;
    this.nom = nom;
    this.vitesse = vitesse;
    this.couleur = couleur;
  }
}

