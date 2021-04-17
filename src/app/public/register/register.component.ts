import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../public.component.css'],
})
export class RegisterComponent implements OnInit {
    firstName: string = '';
    lastName: string = '';
    mail: string = '';
    password: string = '';
    passwordConfirm: string = '';

    constructor(private http: HttpClient, private router: Router, private serv : AuthService) {}

    ngOnInit(): void {}



    submit(): void {

        const formValue = {
            first_name: this.firstName,
            last_name: this.lastName,
            mail: this.mail,
            password: this.password,
            passwordConfirm: this.passwordConfirm,
        }

        this.serv.register(formValue).subscribe(()=>{
            this.router.navigate(['/login'])

        })
    }
}
