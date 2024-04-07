import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../models/lesson.model';
import { LessonsService } from '../../../services/lessons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  lessons: Lesson[] = [];
  currentPageNumber: number = 1;
  totalPages: number = 0;
  pageSize: number = 5;
  totalCount: number = 0;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;

  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const page = params['page'] ? +params['page'] : 1;
      this.loadPageData(page);
    });
  }

  loadPageData(pageNumber: number): void {
    this.lessonsService.getAllLessonsPagination(pageNumber, this.pageSize).subscribe({
      next: (response: any) => {
        this.lessons = response.data.items;
        this.currentPageNumber = response.data.pageNumber;
        this.totalPages = response.data.totalPages;
        this.pageSize = response.data.pageSize;
        this.totalCount = response.data.totalCount;
        this.hasPreviousPage = response.data.hasPreviousPage;
        this.hasNextPage = response.data.hasNextPage;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  changePage(newPageNumber: number): void {
    if (newPageNumber < 1 || newPageNumber > this.totalPages) {
      return;
    }
    this.loadPageData(newPageNumber);
  }
}
