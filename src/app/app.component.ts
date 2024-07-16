import {  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TeacherService } from './Services/Teachers/teacher.service';
import { StudentsService } from './Services/Students/students.service';
import { CoursesService } from './Services/Courses/courses.service';
import { LessonsService } from './Services/Lessons/lessons.service';
import { TeacherMainPageComponent } from "./Components/teacher-main-page/teacher-main-page.component";
import {MatTabsModule} from '@angular/material/tabs'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./Components/login/login.component";
// import {StudentMainPageComponent} from '../app/Components/student-main-page/student-main-page.component'
import {  Router } from '@angular/router';
import {UserService} from '../app/Services/user/user.service'
import { CourseReportComponent } from "./Components/course-report/course-report.component";
 
 
//התקנה
//ng add @angular/material
// import {Fun1Service} from '../app/Services/Functions/fun1.service'

 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [TeacherService, StudentsService, CoursesService, LessonsService],
    imports: [MatTabsModule, CommonModule, RouterOutlet, TeacherMainPageComponent, FormsModule, RouterLinkActive, RouterLink, RouterModule, LoginComponent,CourseReportComponent]
})
export class AppComponent {
  constructor(public teacher:TeacherService,public student:StudentsService, public course:CoursesService,public lesson:LessonsService, public router:Router, public user:UserService ){
   }


title = 'angularproject';
isLogin:boolean=true


  clickSumbit(){
    this.isLogin=false
  }

  Disconnected(){//התנתק
    this.user.user= 
    {Id:"",
    Access:-1,
    FirstName:"",
  };
    this.router.navigate(['/Home'])
  }
  
}



