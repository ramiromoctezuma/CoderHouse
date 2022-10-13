import { map, Observable, of  } from 'rxjs';
import { HttpClient           } from '@angular/common/http';
import { Injectable           } from '@angular/core';
import { Router               } from '@angular/router';

import { CoursesAlumnsService } from 'src/app/data/service/courses-alumns.service';
import { environment          } from 'src/environments/environment';
import { Auth                 } from '../interfaces/auth.interfaces';
import { User                 } from '../../courses-alumns/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.route;
  private   _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

    constructor(private router:                Router,
                private http:                  HttpClient,
                private coursesalumnsservices: CoursesAlumnsService) { }

    verifyAuthentication(): Observable<boolean>{
      if ( !localStorage.getItem('token')) {
        return of(false);
      }
      return this.http.get<Auth>(`${this.baseUrl}/users/${localStorage.getItem('token')}`)
                      .pipe(
                        map( auth => {
                          this._auth = auth;
                          return true;
                        })
                      )
    }

    login(user: User){
      let isLoggedIn: boolean = false;
      return this.coursesalumnsservices.getUsers()
                  .subscribe( usuarios => {
                    usuarios.forEach(userDB => {
                      if (userDB.email === user.email && userDB.password === user.password) {
                        isLoggedIn = true;
                        this._auth = userDB
                        localStorage.setItem('token', String(userDB.id))
                        localStorage.setItem('tu', String(userDB.profile))
                        this.router.navigate(['/coursesalumns'])
                      }
                    });
                    if (isLoggedIn === false) {
                    }
                  })
    }

    logout(){
      this._auth = undefined;
      localStorage.clear();
    }
}
