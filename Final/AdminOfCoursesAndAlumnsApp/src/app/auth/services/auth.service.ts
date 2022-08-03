import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.route;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

    constructor(private http: HttpClient) { }

    verifyAuthentication(): Observable<boolean>{
      console.log('Token', localStorage.getItem('token'));
      
      if ( !localStorage.getItem('token')) {
        return of(false);
      }
      return this.http.get<Auth>(`${this.baseUrl}/users/1`)
                      .pipe(
                        map( auth => {
                          this._auth = auth;
                          return true;
                        })
                      )
    }

    login(){
      return this.http.get<Auth>(`${this.baseUrl}/users/1`)
                      .pipe(
                        tap(auth => this._auth = auth),
                        tap(auth => localStorage.setItem('token', String(auth.id)))
                      );
    }

    logout(){
      this._auth = undefined;
      localStorage.clear;
    }
}
