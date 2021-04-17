import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-secure',
    templateUrl: './secure.component.html',
    styleUrls: ['./secure.component.css'],
})
export class SecureComponent implements OnInit {

  user : User;

    constructor(private serv: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.serv.user().subscribe(
            user => this.user = user,

            (err) => { this.router.navigate(['/login'])}
        );
    }
}
