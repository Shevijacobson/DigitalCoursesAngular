import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { Student } from '../../Models/Student';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FunLessonService } from '../../Services/Functions/fun-lesson.service';
import { Lesson } from '../../Models/Lesson';
import { Router } from '@angular/router';
import { state } from '@angular/animations';


@Component({
  selector: 'app-course-report',
  standalone: true,
  imports: [MatTableModule, CommonModule, RouterLink],
  templateUrl: './course-report.component.html',
  styleUrl: './course-report.component.scss'
})
export class CourseReportComponent {

  idStudentsArr!: string[];
  studentsArr: Student[] | undefined;
  lessonsArrBySudent!: Lesson[];
  idCourse = "";
  countAbsentLessons = 0;
  absentLessonsArr: number[] = [];
  countLessons = 0;
  studentsArrWithAllDetails: any[] = [];

  constructor(private course: FunCourseService, private student: FunStudentsService, private route: ActivatedRoute, private funLesson: FunLessonService, private router: Router) { }
 
  backToHomePageTeacher() {
this.router.navigate(['HomePageTeacher']);
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idCourse = params['idCourse'];
      if (this.idCourse != "")
      this.mergeDetailsStudentsWithLessons();
    });
  }

  mergeDetailsStudentsWithLessons(){
      
    this.countLessons = this.course.getCountLessons(this.idCourse);//כמות שיעורים של הקורס הנוכחי
    this.idStudentsArr = this.course.getIdStudentsInCurrentCourse(this.idCourse);
    this.studentsArr = this.student.GetStudentsById(this.idStudentsArr);//כל התלמידים בקורס הנוכחי
    for (let student of this.studentsArr)
      {   
       this.lessonsArrBySudent = this.funLesson.GetAllLessonsByIdStudent(student.Id, this.idCourse)

       for (let lesson of this.lessonsArrBySudent) {
         if (!lesson.isExecution)
           this.countAbsentLessons++;
       }

       let stu = { ...student, numlesson: this.countLessons, absentLessons: this.countAbsentLessons, allLessons: [...this.lessonsArrBySudent] }
       this.studentsArrWithAllDetails.push(stu)
       this.countAbsentLessons = 0;
     } 
  }

  navigateToStudentReport(idStudent: string) {
    let studentDetails: any = {};
    for (let student of this.studentsArrWithAllDetails) {
      if (student.Id == idStudent)
        studentDetails = student;
    }

    this.router.navigate(['/studentReport'], { state: { currentStudent: studentDetails } })
  }

}
