import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-editidioma',
  templateUrl: './editidioma.component.html',
  styleUrls: ['./editidioma.component.css']
})
export class EditidiomaComponent implements OnInit {
  idioma: Idioma = null;
  
  constructor(
    private idiomaS: IdiomaService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomaS.detail(id).subscribe(
      data =>{
        this.idioma = data;
      }, err =>{
         alert("Error al modificar.");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomaS.update(id, this.idioma).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar.");
        this.router.navigate(['']);
      }
    )
  }
}
