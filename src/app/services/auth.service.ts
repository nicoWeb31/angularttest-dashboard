import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http : HttpClient
  ) { }

login(data : {mail : string, password : string}, credentials: boolean): Observable<any>{
  return this.http.post(`${environment.api}/login`, data, {withCredentials : credentials});
}

register(data : any) : Observable<any> {
  return this.http.post(`${environment.api}/register`,data)
}


}
