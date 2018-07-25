export class Message {
  expediteur: string;
  date: string;
  message: string;

  constructor(expediteur: string, date: string, message: string) {
    this.expediteur = expediteur;
    this.date = date;
    this.message = message;
  }
}
