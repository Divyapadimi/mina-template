import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const FORM_VALIDATION_MESSAGES = {
  email: [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'No pattern.'}
  ],
};

@Component({
  selector: 'app-resuable-form',
  templateUrl: './resuable-form.component.html',
  styleUrls: ['./resuable-form.component.scss']
})
export class ResuableFormComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() errorMessagesKeyName: string;
  errorMessages: { type: string, message: string }[];

  constructor() {
  }

  ngOnInit() {
   

}
}
