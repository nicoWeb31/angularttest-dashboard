import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../public.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  mail: string = '';
  password: string = '';


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : '',
      password : '',
    })
  }

  login(){
    
  }

}          
