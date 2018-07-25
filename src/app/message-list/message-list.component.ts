import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];
  constructor(messageService: MessageService) {
    this.messages = messageService.get();
  }

  ngOnInit() {
  }

}
