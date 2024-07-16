import { Component } from '@angular/core';
import { UserService } from '../../Services/user/user.service';
// import {FunCourseService} from '../../Services/Functions/fun-course.service'
import { FunCourseService } from '../../Services/Functions/fun-course.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
// import { FunStudentsService } from '../../Services/Functions/fun-students.service';
// import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';
@Component({
  selector: 'app-display-courses-by-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './display-courses-by-user.component.html',
  styleUrl: './display-courses-by-user.component.scss'
})
export class DisplayCoursesByUserComponent {
  constructor(public userGlobal:UserService, public funCourse:FunCourseService,public funTecher:FunTecherService,public funStudents:FunStudentsService,private router: Router){    
  }

user=this.userGlobal.user;

arrCour =this.funCourse.getCoursesByUser();

//בפונקציה זו אם זה מזהה מנהל להביא את כמות השיעוריםVVV
countListen(id_Cours:string){
 if(this.user.Access==0)
return this.funCourse.GetCountLessonsForCourse(id_Cours);
 
  return this.funStudents.CountLessonStudentListen(id_Cours,this.user.Id)
  
}
//כמ שיעורים יש בקורס ספציפי לא לפי מזהה תלמידVVV
countLessonInCours(id_Cours:string){
  // return this.funStudents.CountLessonInCourse(id_Cours,this.user.Id)
  return this.funCourse.GetCountLessonsForCourse(id_Cours);
}

techerOfLesson(idTeacher:string){
  return this.funTecher.GetNameTeacher(idTeacher)
}

EnterToCourse(courseId:string){
  
  this.router.navigate(['DisplayCourse/CurrentCourse', courseId]);
}

}
