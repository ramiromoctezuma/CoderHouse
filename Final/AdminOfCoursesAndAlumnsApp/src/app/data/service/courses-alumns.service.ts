import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable  } from 'rxjs';
import { Student     } from 'src/app/courses-alumns/model/student';
import { User        } from 'src/app/courses-alumns/model/user';
import { Course } from '../../courses-alumns/model/course';
import { Inscription } from '../../courses-alumns/model/inscription';

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
      return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
    }

    deleteUser(idUser: number): Observable<User[]>{
      return this.http.delete<User[]>(`${this.baseUrl}/users/${idUser}`);
    }
  //#endregion

  //#region     ALUMNS
  addStudent(student: any): Observable<Student[]>{
    let studentM: Student = {
      name:    {
        firstName: student.firstName,
        lastName: student.lastName
      },
      profile: student.profile,
      gender:  student.gender,
      id:      student.id
    }
    return this.http.post<Student[]>(`${this.baseUrl}/alumns`, studentM);
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/alumns`);
  }

  getStudentById(idStudent: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/alumns/${idStudent}`);
  }

  editStudent(student: any): Observable<Student>{
    
    let studentM: Student = {
      name: {
        firstName: student.firstName,
        lastName: student.lastName
      },
      profile: student.profile,
      gender:  student.gender,
      id:      student.id
    } 
    return this.http.put<Student>(`${this.baseUrl}/alumns/${student.id}`, studentM);
  }

  deleteStudent(idStudent: string): Observable<Student[]>{
    return this.http.delete<Student[]>(`${this.baseUrl}/alumns/${idStudent}`);
  }
//#endregion

  //#region     COURSES
  addCourse(course: any): Observable<Course[]>{
    let courseM: Course = {
      name:           course.lastName,
      hquantity:      course.hquantity,
      cquantity:      course.cquantity,
      assignedtecher: course.assignedtecher,
      idCourse:       course.idCourse,
    }
    return this.http.post<Course[]>(`${this.baseUrl}/courses`, courseM);
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  getCourseById(idCourse: number): Observable<Course>{
    return this.http.get<Course>(`${this.baseUrl}/courses/${idCourse}`);
  }

  editCourse(course: any): Observable<Course>{
    let courseM: Course = {
      name:           course.lastName,
      hquantity:      course.hquantity,
      cquantity:      course.cquantity,
      assignedtecher: course.assignedtecher,
      idCourse:       course.idCourse,
    }
    return this.http.put<Course>(`${this.baseUrl}/courses/${course.idCourse}`, courseM);
  }

  deleteCourse(idCourse: string): Observable<Course[]>{
    return this.http.delete<Course[]>(`${this.baseUrl}/courses/${idCourse}`);
  }
//#endregion

//#region     COURSES
addInscription(course: any): Observable<Inscription[]>{
  let courseM: Inscription = {
    idAlmun:          course.idAlmun,
    idCourse:         course.idCourse,
    registrationDate: course.registrationDate,
    idUser:           course.idUser,
    idInscription:    course.idInscription,
  }
  return this.http.post<Inscription[]>(`${this.baseUrl}/inscriptions`, courseM);
}

getInscriptions(): Observable<Inscription[]>{
  return this.http.get<Inscription[]>(`${this.baseUrl}/inscriptions`);
}

getInscriptionById(idInscription: number): Observable<Inscription>{
  return this.http.get<Inscription>(`${this.baseUrl}/inscriptions/${idInscription}`);
}

editInscription(course: any): Observable<Inscription>{
  let courseM: Inscription = {
    idAlmun:          course.idAlmun,
    idCourse:         course.idCourse,
    registrationDate: course.registrationDate,
    idUser:           course.idUser,
    idInscription:    course.idInscription,
  }
  return this.http.put<Inscription>(`${this.baseUrl}/inscriptions/${course.idInscription}`, courseM);
}

deleteInscription(idInscription: string): Observable<Inscription[]>{
  return this.http.delete<Inscription[]>(`${this.baseUrl}/inscriptions/${idInscription}`);
}
//#endregion
}
