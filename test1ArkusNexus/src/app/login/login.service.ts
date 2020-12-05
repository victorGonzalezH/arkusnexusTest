import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginResult } from './login-result.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'https://localhost:5001/api/test1/';

  constructor(private httpClient: HttpClient) { }



  public login(username: string, password: string): Observable<LoginResult> {
     const completeUrl = this.baseUrl + 'login';
     return this.httpClient.post(completeUrl, { username, password })
     .pipe(switchMap(result => of(result as LoginResult)),   catchError( error => throwError(error)));


  }

}
