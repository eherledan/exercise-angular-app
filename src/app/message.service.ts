import { Injectable } from '@angular/core';
import {Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [{expediteur: 'Jean Patafiol', date: '25/07/2018 à 10h26', message: 'Yo, ça bounce ?'}];
  constructor() { }

  add(message: Message) {
    this.messages.push(message);
  }

  get() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }

}
