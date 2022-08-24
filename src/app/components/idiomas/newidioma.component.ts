import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-newidioma',
  templateUrl: './newidioma.component.html',
  styleUrls: ['./newidioma.component.css']
})
export class NewidiomaComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private idiomaS: IdiomaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const idioma = new Idioma(this.nombreE, this.descripcionE);
    this.idiomaS.save(idioma).subscribe(
      data =>{
        alert("Idioma añadido correctamente.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló.");
        this.router.navigate(['']);
      }
    )
  }
}