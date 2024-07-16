import { Component } from '@angular/core';
// import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import {FunTecherService} from '../../Services/Functions/fun-techer.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../Models/Teacher';
import { ActivatedRoute, Router } from '@angular/router';
// import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import {FunStudentsService} from '../../Services/Functions/fun-students.service'


@Component({
  selector: 'app-teachers-and-students-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teachers-and-students-report.component.html',
  styleUrl: './teachers-and-students-report.component.scss'
})
export class TeachersAndStudentsReportComponent {

  teachers: any[] = [];
  users: any[] = [];
  isTeacher = false;
  constructor(private funTeacher: FunTecherService, private funStudent: FunStudentsService, private router: ActivatedRoute, private route: Router) {

    if (this.route.url.includes("teachersReport")) {
      this.users = funTeacher.GetAllTeachersWithTheirCourses()
      this.isTeacher = true;
    }
    else
    if(this.route.url.includes("studentsReport"))
      this.users = funStudent.GetAllStudentsWithTheirCourses();

  }
  navigateToEdit(userToEdit: any) {
if(this.isTeacher)
    this.route.navigate(['HomePageManager/editTeacher'], { state: { userToEdit: userToEdit } })
  else
  this.route.navigate(['HomePageManager/editStudent'], { state: { userToEdit: userToEdit } })
  }


}
