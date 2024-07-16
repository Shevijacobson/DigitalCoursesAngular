import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { CoursesService } from '../../Services/Courses/courses.service';
import {MatTabsModule} from '@angular/material/tabs';
import {detailsCourse} from "../details-course/details-course.component"
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-teacher-main-page',
    standalone: true,
    templateUrl: './teacher-main-page.component.html',
    styleUrl: './teacher-main-page.component.scss',
    imports: [CommonModule, FormsModule, MatTabsModule, detailsCourse,RouterLink,RouterModule,RouterLinkActive]
})
export class TeacherMainPageComponent {
  constructor(public funCourses:FunCourseService,public router:Router){  
  }
 
 arrCourses=this.funCourses.getCoursesByUser();

  // arrCourses=this.funCourses.getCoursesOfTeacher("8825484626")

  // Disconnected(){//התנתק
  //   this.router.navigate(['/Home'])
  // }

  
 
}
