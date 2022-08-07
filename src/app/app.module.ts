import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Importando modulo de formulários

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { Course } from './courses/course';
import { StarComponent } from './star/star.component';

// Informando cada componente ao angular
@NgModule({
  declarations: [
    AppComponent, 
    CourseListComponent,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    //importando o módulo
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
