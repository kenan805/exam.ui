import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsListComponent } from './components/lessons/lessons-list/lessons-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddLessonComponent } from './components/lessons/add-lesson/add-lesson.component';
import { FormsModule } from '@angular/forms';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { ExamsListComponent } from './components/exams/exams-list/exams-list.component';
import { AddExamComponent } from './components/exams/add-exam/add-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
    AddLessonComponent,
    StudentsListComponent,
    AddStudentComponent,
    ExamsListComponent,
    AddExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
