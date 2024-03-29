import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-AP/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { NewidiomaComponent } from './components/idiomas/newidioma.component';
import { NewcursosComponent } from './components/cursos/newcursos.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditidiomaComponent } from './components/idiomas/editidioma.component';
import { EditcursosComponent } from './components/cursos/editcursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    InfoComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IdiomasComponent,
    CursosComponent,
    HomeComponent,
    LoginComponent,
    Error404Component,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    NewidiomaComponent,
    NewcursosComponent,
    EditeducacionComponent,
    EditidiomaComponent,
    EditcursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  interceptorProvider
],
  bootstrap: [AppComponent],
})
export class AppModule { }
