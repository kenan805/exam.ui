import { Component, OnInit } from '@angular/core';
import { Exam } from '../../../models/exam.module';
import { ExamsService } from '../../../services/exams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrl: './exams-list.component.css'
})
export class ExamsListComponent implements OnInit {

  exams: Exam[] = [];
  currentPageNumber: number = 1;
  totalPages: number = 0;
  pageSize: number = 5;
  totalCount: number = 0;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;

  constructor(private route: ActivatedRoute, private examsService: ExamsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const page = params['page'] ? +params['page'] : 1;
      this.loadPageData(page);
    });
  }

  loadPageData(pageNumber: number): void {
    this.examsService.getAllExamsPagination(pageNumber, this.pageSize).subscribe({
      next: (response: any) => {
        this.exams = response.data.items;
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
