import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name=new FormControl('',[
    Validators.required,
    Validators.minLength(3)
])
  email=new FormControl('',[
    Validators.required,
    Validators.email
  ])
  age=new FormControl('',[
    Validators.required,
    Validators.min(16),
    Validators.max(120)
  ])
  password=new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password=new FormControl('',[
    Validators.required
  ])
  phoneNumber=new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])

  showAlert= false
  alerColor='blue'
  alertMsg='Please wait! Your account is being created.'

  registerForm= new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber:this.phoneNumber


  })
  register(){
    this.showAlert=true
    this.alerColor='blue'
    this.alertMsg='Please wait! Your account is being created.'
  }

}
