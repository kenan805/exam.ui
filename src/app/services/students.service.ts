import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllStudentsPagination(pageNumber: number, pageSize: number): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + `/api/students/pagination?PageNumber=${pageNumber}&PageSize=${pageSize}`)
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/api/students/all')
  }

  addStudent(addStudentRequest: Student): Observable<Student> {
    return this.http.post<Student>(this.baseApiUrl + '/api/students', addStudentRequest);
  }
}


