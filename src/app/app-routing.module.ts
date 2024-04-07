import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsListComponent } from './components/lessons/lessons-list/lessons-list.component';
import { AddLessonComponent } from './components/lessons/add-lesson/add-lesson.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { ExamsListComponent } from './components/exams/exams-list/exams-list.component';
import { AddExamComponent } from './components/exams/add-exam/add-exam.component';

const routes: Routes = [
  {
    path: '',
    component: LessonsListComponent
  },
  {
    path: 'lessons',
    component: LessonsListComponent
  },
  {
    path: 'lessons/page/:page',
    component: LessonsListComponent
  },
  {
    path: 'lessons/add',
    component: AddLessonComponent
  },
  {
    path: 'students',
    component: StudentsListComponent
  },
  {
    path: 'students/page/:page',
    component: StudentsListComponent
  },
  {
    path: 'students/add',
    component: AddStudentComponent
  },
  {
    path: 'exams',
    component: ExamsListComponent
  },
  {
    path: 'exams/page/:page',
    component: ExamsListComponent
  },
  {
    path: 'exams/add',
    component: AddExamComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
