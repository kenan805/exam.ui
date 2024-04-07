import { Injectable } from '@angular/core';
import { AddExam, Exam } from '../models/exam.module';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllExamsPagination(pageNumber: number, pageSize: number): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.baseApiUrl + `/api/exams/pagination?PageNumber=${pageNumber}&PageSize=${pageSize}`)
  }

  addExam(addExamRequest: AddExam): Observable<AddExam> {
    return this.http.post<AddExam>(this.baseApiUrl + '/api/exams', addExamRequest);
  }
}
