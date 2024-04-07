import { Component, OnInit } from '@angular/core';
import { AddExam } from '../../../models/exam.module';
import { ExamsService } from '../../../services/exams.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';
import { Lesson } from '../../../models/lesson.model';
import { Student } from '../../../models/student.model';
import { LessonsService } from '../../../services/lessons.service';
import { StudentsService } from '../../../services/students.service';
import { response } from 'express';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.css'
})
export class AddExamComponent implements OnInit {

  students: Student[] = [];
  lessons: Lesson[] = [];

  addExamRequest: AddExam = {
    studentId: 0,
    lessonId: 0,
    grade: 0,
    date: new Date()
  };
  constructor(private studentsService: StudentsService,
              private lessonsService: LessonsService,
              private examsService: ExamsService,
              private router: Router) { }

  ngOnInit(): void {

    this.studentsService.getAllStudents().subscribe({
      next: (response: any) => {
        this.students = response.data;
      }
    });

    this.lessonsService.getAllLessons().subscribe({
      next: (response: any) => {
        this.lessons = response.data;
      }
    });
  }

  addExam() {
    this.examsService.addExam(this.addExamRequest)
    .subscribe({
      next: (response: any) => {
        alert(response.message);
        if(response.statusCode == HttpStatusCode.Created)
          this.router.navigate(['exams']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
