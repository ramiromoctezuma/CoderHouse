import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap                                                                              } from 'rxjs';
import { AuthService                                                                                  } from '../services/auth.service';
import { Injectable                                                                                   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router:      Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.verifyAuthentication()
                                .pipe(
                                  tap( estaAutenticado  => {
                                    if ( !estaAutenticado ){
                                      this.router.navigate(['./auth/login'])
                                    }
                                    }
                                  )
                                )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {
    return this.authService.verifyAuthentication()
                          .pipe(
                            tap( estaAutenticado => {
                              if ( !estaAutenticado ){
                                this.router.navigate(['./auth/login'])
                              }
                            })
                          );
  }
}
