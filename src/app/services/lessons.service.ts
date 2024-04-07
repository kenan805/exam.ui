import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllLessonsPagination(pageNumber: number, pageSize: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.baseApiUrl + `/api/lessons/pagination?PageNumber=${pageNumber}&PageSize=${pageSize}`)
  }

  getAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.baseApiUrl + '/api/lessons/all')
  }

  addLesson(addLessonRequest: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.baseApiUrl + '/api/lessons', addLessonRequest);
  }
}
