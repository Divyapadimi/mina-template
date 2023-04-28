import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-resuable-input',
  templateUrl: './resuable-input.component.html',
  styleUrls: ['./resuable-input.component.scss']
})
export class ResuableInputComponent implements OnInit {

  @Input() label: string='';
  @Input() placeholder: string='';
  @Input() readonly: boolean=false;
  @Input() type: string='';
  @Input() name: string='';
  @Input() required:boolean=false;
  @Input() control: FormControl = new FormControl;
  @Input() formControlName:string='';
  @Input() value:string='';

  mymodel!:string;

  constructor() {
   }

  ngOnInit(): void {

  }

  displayErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
