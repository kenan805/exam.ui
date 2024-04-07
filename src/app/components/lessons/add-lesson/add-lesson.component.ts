import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../models/lesson.model';
import { LessonsService } from '../../../services/lessons.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent implements OnInit {

  addLessonRequest: Lesson = {
    id: 0,
    code: '',
    name: '',
    class: 0,
    teacherName: '',
    teacherSurname: ''

  };
  constructor(private lessonsService: LessonsService, private router: Router) { }

  ngOnInit(): void {

  }

  addLesson() {
    this.lessonsService.addLesson(this.addLessonRequest)
    .subscribe({
      next: (response: any) => {
        alert(response.message);
        if(response.statusCode == HttpStatusCode.Created)
          this.router.navigate(['lessons']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
