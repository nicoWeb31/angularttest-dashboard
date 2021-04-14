import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    firstName: string = '';
    lastName: string = '';
    mail: string = '';
    password: string = '';
    passwordConfirm: string = '';

    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit(): void {}



    submit(): void {


        this.http.post(`${environment.api}/register`, {
            first_name: this.firstName,
            last_name: this.lastName,
            mail: this.mail,
            password: this.password,
            passwordConfirm: this.passwordConfirm,
            // optionRequete
        }).subscribe(res=>{
          console.log(res)
          this.router.navigate(['/login'])
        })
    }
}
