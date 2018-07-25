import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[];
  constructor(messageService: MessageService) {
    this.messages = messageService.messages;
  }

  ngOnInit() {
  }

}
