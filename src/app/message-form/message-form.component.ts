import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm = new FormGroup({
    expediteur: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.messageForm.status === 'VALID') {
      const date = new Date(Date.now());
      const datetime = date.toLocaleDateString() + ' à ' + date.getHours() + 'h' + date.getMinutes();
      this.messageService.add({expediteur: this.messageForm.value.expediteur,
        date: String(datetime),
        message: this.messageForm.value.message});
    }
  }

}
