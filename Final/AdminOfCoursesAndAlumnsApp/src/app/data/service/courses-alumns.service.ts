import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable              } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable  } from 'rxjs';
import { Student     } from 'src/app/courses-alumns/model/student';
import { User        } from 'src/app/courses-alumns/model/user';

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

    editUser(user: User): Observable<User>{
      console.log('User: ', user);
      
      return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
    }

    deleteUser(idUser: number): Observable<User[]>{
      return this.http.delete<User[]>(`${this.baseUrl}/alumns/${idUser}`);
    }
  //#endregion

  //#region     ALUMNOS
  addStudent(alumn: Student): Observable<Student[]>{
    return this.http.post<Student[]>(`${this.baseUrl}/alumns`, alumn);
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/alumns`);
  }

  getStudentById(idStudent: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/alumns/${idStudent}`);
  }

  editStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.baseUrl}/alumns/${student.id}`, student);
  }

  deleteStudent(idStudent: string): Observable<Student[]>{
    return this.http.delete<Student[]>(`${this.baseUrl}/alumns/${idStudent}`);
  }
//#endregion

}
