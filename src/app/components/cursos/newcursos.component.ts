import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-newcursos',
  templateUrl: './newcursos.component.html',
  styleUrls: ['./newcursos.component.css']
})
export class NewcursosComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  fechaE: string;

  constructor(private cursosS: CursosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const cursos = new Cursos(this.nombreE, this.descripcionE, this.fechaE);
    this.cursosS.save(cursos).subscribe(
      data =>{
        alert("Curso añadido correctamente.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló.");
        this.router.navigate(['']);
      }
    )
  }
}