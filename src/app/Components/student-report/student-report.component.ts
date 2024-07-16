import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-report.component.html',
  styleUrl: './student-report.component.scss'
})
export class StudentReportComponent {


  student: any;
  constructor(private route: ActivatedRoute, private router: Router) {

    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras.state?.['currentStudent'];
    console.log(this.student);
  }

  backToCourseReport() {
    this.router.navigate([`report/courseId/`+this.student.allLessons[0].IdCourse]);
    }






}
