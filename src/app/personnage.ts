export class Personnage {
  prenom: string;
  nom: string;
  age: number;
  genre: string;
  pointsVie: number;
  attaque: number;
  defense: number;
  armure: number;

  constructor(prenom: string, nom: string, age: number, genre: string, pointsVie: number, attaque: number, defense: number, armure: number) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.genre = genre;
    this.pointsVie = pointsVie;
    this.attaque = attaque;
    this.defense = defense;
    this.armure = armure;
  }
}
