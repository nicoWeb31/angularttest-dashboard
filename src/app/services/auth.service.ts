import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(protected http: HttpClient) {}

    login(
        data: { mail: string; password: string },
        credentials: boolean
    ): Observable<any> {
        return this.http.post(`${environment.api}/login`, data, {
            withCredentials: credentials,
        });
    }

    register(data: any): Observable<any> {
        return this.http.post(`${environment.api}/register`, data);
    }


    user(): Observable<User> {

      return this.http.get<User>(`${environment.api}/user`,{withCredentials :true})

    }
}
