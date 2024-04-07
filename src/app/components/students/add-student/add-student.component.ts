import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { StudentsService } from '../../../services/students.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})

export class AddStudentComponent implements OnInit {

  addStudentRequest: Student = {
    id: 0,
    no: 0,
    name: '',
    surname: '',
    class: 0
  };
  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit(): void {

  }

  addStudent() {
    this.studentsService.addStudent(this.addStudentRequest)
    .subscribe({
      next: (response: any) => {
        alert(response.message);
        if(response.statusCode == HttpStatusCode.Created)
          this.router.navigate(['students']);
      }
    });
  }
}

