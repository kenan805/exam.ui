export interface Exam {
  lessonCode: string;
  studentNumber: number;
  date: Date;
  grade: number;
}

export interface AddExam {
  lessonId: number;
  studentId: number;
  date: Date;
  grade: number;
}
