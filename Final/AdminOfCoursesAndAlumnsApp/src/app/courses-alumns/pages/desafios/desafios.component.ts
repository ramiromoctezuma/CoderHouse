import { Component, OnInit    } from '@angular/core';

import { CoursesAlumnsService } from 'src/app/data/service/courses-alumns.service';
import { AuthService          } from 'src/app/auth/services/auth.service';
import { Student              } from 'src/app/courses-alumns/model/student';
import { User                 } from '../../model/user';

@Component({
  selector:     'app-desafios',
  templateUrl:  './desafios.component.html',
  styleUrls:   ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit {

  public get auth(){
    return this.authservice.auth;
  }

  users:    User[] = [];
  students: Student[] = [];

  // Desafio 2:
  variable1: number = 5;

  constructor(private authservice:          AuthService,
              private coursesAlumnsService: CoursesAlumnsService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getStudents(); // Coment this line to try the ngIf directive
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
    this.coursesAlumnsService.getStudents()
        .subscribe(studentDB => {
          this.students = studentDB;
        })
  }
}
