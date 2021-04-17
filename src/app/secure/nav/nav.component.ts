import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
    @Input('user') user: User;

    constructor(private serv: AuthService) {}

    ngOnInit(): void {
    }

    logout(): void {
        this.serv.logout().subscribe(() => {
            console.log('logout');
        });
    }
}
