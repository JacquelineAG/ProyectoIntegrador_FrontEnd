import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcursosComponent } from './components/cursos/editcursos.component';
import { NewcursosComponent } from './components/cursos/newcursos.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { Error404Component } from './components/error404/error404.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditidiomaComponent } from './components/idiomas/editidioma.component';
import { NewidiomaComponent } from './components/idiomas/newidioma.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'error404', component: Error404Component},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'nuevoidi', component: NewidiomaComponent},
  {path:'nuevocur', component: NewcursosComponent},
  {path:'editedu/:id', component:EditeducacionComponent},
  {path:'editcur/:id', component:EditcursosComponent},
  {path:'editidi/:id', component:EditidiomaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
