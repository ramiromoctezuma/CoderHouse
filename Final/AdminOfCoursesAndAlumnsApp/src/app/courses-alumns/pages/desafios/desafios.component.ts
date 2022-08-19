import { Component, OnInit, OnDestroy } from '@angular/core';

import { CoursesAlumnsService } from 'src/app/data/service/courses-alumns.service';
import { AuthService          } from 'src/app/auth/services/auth.service';
import { Student              } from 'src/app/courses-alumns/model/student';
import { User                 } from '../../model/user';
import { map, Observable, Subscription } from 'rxjs';
import { Name } from '../../model/student';

@Component({
  selector:     'app-desafios',
  templateUrl:  './desafios.component.html',
  styleUrls:   ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit, OnDestroy {

  public get auth(){
    return this.authservice.auth;
  }

  users:    User[] = [];
  students: Student[] = [];

  studentsSuscription!: Subscription;
  userSuscription!: Subscription;
  student$!: Observable<any>;


  // Desafio 2:
  variable1: number = 5;

  constructor(private authservice:          AuthService,
              private coursesAlumnsService: CoursesAlumnsService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getStudents(); // Coment this line to try the ngIf directive
    // Desafio 5
    this.coursesAlumnsService.getStudents().pipe(
      map((students: any[]) => students.filter((student) => student.gender === 'F'))
    ).subscribe((students) => {
      console.log('in Suscribe: ', students);
    })

    // Promise Reject
    this.coursesAlumnsService.getStudentsPromise(this.users).then((users) => {
      console.log(users)
    }).catch((error) => {
      console.log(error)
    });
  }
  
  // Promise Resolve
  tryPromise(){
    this.coursesAlumnsService.getStudentsPromise(this.users).then((users) => {
      console.log(users)
    }).catch((error) => {
      console.log(error)
    });
  }

  gotToURL(url: string){
    window.open(url);
  }

  getUsers(){
    this.coursesAlumnsService.getUsers()
        .subscribe(usersDB => {
          this.users = usersDB;
        })
  }

  getStudents(){
    this.studentsSuscription = this.coursesAlumnsService.getStudents()
        .subscribe(studentDB => {
          this.students = studentDB;
        })
    this.student$ = this.coursesAlumnsService.getStudents();
  }
  
  //desafio 5
  ngOnDestroy(): void {
    this.userSuscription.unsubscribe();
    this.studentsSuscription.unsubscribe();
  }
}
