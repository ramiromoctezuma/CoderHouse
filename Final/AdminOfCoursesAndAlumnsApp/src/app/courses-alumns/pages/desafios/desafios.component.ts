import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotToURL(){
    window.open("https://github.com/ramiromoctezuma/CoderHouse/tree/main/CLase%202%20-%20Componentes/ramiroMoctezumaDesafio1");
  }

}
