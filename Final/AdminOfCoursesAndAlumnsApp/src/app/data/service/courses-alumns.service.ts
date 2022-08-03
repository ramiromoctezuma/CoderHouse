import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from 'src/app/courses-alumns/model/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CoursesAlumnsService {

  private baseUrl:string = environment.route;

  constructor(private http: HttpClient) { }

  //#region     USERS
    addUser(user: User): Observable<User[]>{
      return this.http.post<User[]>(`${this.baseUrl}/users`, user);
    }

    getUsers(): Observable<User[]>{
      return this.http.get<User[]>(`${this.baseUrl}/users`);
    }

    getUserById(idUser: number): Observable<User>{
      return this.http.get<User>(`${this.baseUrl}/users/${idUser}`);
    }

    editUser(idUser: number): Observable<User>{
      return this.http.put<User>(`${this.baseUrl}/users`, idUser);
    }

    deleteUser(idUser: number): Observable<User[]>{
      return this.http.delete<User[]>(`${this.baseUrl}/users/${idUser}`);
    }
  //#endregion

}
