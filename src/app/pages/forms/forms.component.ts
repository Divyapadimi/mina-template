import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  formData: FormGroup;

  companydetails=[
    {
      label:"Employee Name",
      placeholder:"Enter your Employee-Name",
      type:"text"
    },
    {
      label:"Employee Id",
      placeholder:"Enter your employee-id",
      type:"text"
    },
    {
      label:"Company-Email",
      placeholder:"Enter your email",
      type:"email"
    },
  ]

  companydetails1=[
    {
      label:"Date of Joining",
      placeholder:"Enter date",
      type:"date"
    },
    {
      label:"Phonenumber",
      placeholder:"Enter your number",
      type:"number"
    },
  ]

  personalInformation=[
    {
      label:"FirstName",
      placeholder:"Enter your firstname",
      type:"text",
      formControlName:"firstName",
    },
    {
      label:"LastName",
      placeholder:"Enter your Lasttname",
      type:"text",
      formControlName:"lastName",
    },
    {
      label:"Email",
      placeholder:"Enter your Email",
      type:"email",
      formControlName:"email"
    },
  
  ]

  persondetails=[
    {
      label:"Password",
      placeholder:"Enter your password",
      type:"password",
      FormControlName:"password"
    },
    {
      label:"Confirm-Password",
      placeholder:"Re-enter your password",
      type:"password",
      FormControlName:"confirmpassword"
    },
  ]
  person=[
    {
      label:"Mobile Number",
      placeholder:"Enter your Mobile Number",
      type:"number",
      FormControlName:"mobileNumber"
    },
  ]

  

  constructor() { }

  ngOnInit(): void {

    this.formData = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password:new FormControl('', [
        Validators.required
      ]),
      confirmpassword:new FormControl('', [
        Validators.required
      ]),
      mobileNumber:new FormControl('', [
        Validators.required
      ]),


    });
  }



  onSubmit(){
    console.log(this.formData.value)
  }

}
