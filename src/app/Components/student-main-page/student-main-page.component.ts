import { Component } from '@angular/core';
import { UserService } from '../../Services/user/user.service';
import {FunCourseService} from '../../Services/Functions/fun-course.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';



@Component({
  selector: 'app-student-main-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-main-page.component.html',
  styleUrl: './student-main-page.component.css'
})
export class StudentMainPageComponent {
  constructor(public userGlobal:UserService, public funCourse:FunCourseService,public funTecher:FunTecherService,public funStudents:FunStudentsService,private router: Router){    
  }

user=this.userGlobal.user;
// arrCour =this.funCourse.getCoursesOfStudent(this.user.Id);

// Disconnected(){//התנתק
//   this.router.navigate(['/Home'])
// }
countListen(id_Cours:string){
  return this.funStudents.CountLessonStudentListen(id_Cours,this.user.Id)
  
}
countLessonInCours(id_Cours:string){
  return this.funStudents.CountLessonInCourse(id_Cours,this.user.Id)
  
  
}
techerOfLesson(idTeacher:string){
  // console.log(this.funTecher.GetNameTeacher(idTeacher))
  return this.funTecher.GetNameTeacher(idTeacher)
}

EnterToCourse(courseId:string){
  this.router.navigate(['HomePageStudent/CurrentCourse', courseId]);
}


}
