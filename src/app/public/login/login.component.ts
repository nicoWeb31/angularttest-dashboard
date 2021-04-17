import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

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
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail : '',
      password : '',
    })
  }

  login(){
  //   console.log(this.form.getRawValue())

  //   this.http.post(`${environment.api}/login`, this.form.getRawValue(), {withCredentials : true}).subscribe(()=>{
  //   this.router.navigate(['/'])
  //   // this.router.navigate(['/login'])
  // })

  this.service.login(this.form.getRawValue(), true).subscribe(()=>{
    this.router.navigate(['/'])
  })

  }

}          
