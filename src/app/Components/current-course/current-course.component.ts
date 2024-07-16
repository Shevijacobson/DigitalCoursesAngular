import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
// import { FunLessonService } from '../../Services/Functions/fun-lesson.service'
import { FunLessonService } from '../../Services/Functions/fun-lesson.service';
// import { FunCourseService } from '../../Services/Functions/fun-course.service'
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { Lesson } from '../../Models/Lesson';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {  Router } from '@angular/router';
import { from } from 'rxjs';
// import {FunStudentsService} from '../../Services/Functions/fun-students.service'
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-current-course',
  standalone: true,
  imports: [MatTabsModule, FormsModule, CommonModule],
  templateUrl: './current-course.component.html',
  styleUrl: './current-course.component.css'
})
export class CurrentCourseComponent {
  constructor(public user:UserService,public funStudent:FunStudentsService,public rout:Router,private route: ActivatedRoute, public funLesson: FunLessonService, public funCourse:FunCourseService) { }
  arrLesson: Lesson[] = []
  courseId: string = ""
  nameCourse!:string



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];

      if (this.courseId != "") {
        // let arrLesson: Lesson[]
        this.arrLesson=this.funLesson.LessonForCourse(this.courseId)
        console.log(this.arrLesson)
        this.nameCourse=this.funCourse.getNameCourseOfId(this.courseId);

      }

    });
  }

  getColor( numIdLesson:string){
    let num=0;
    num=parseInt(numIdLesson);
    if(this.funStudent.CountLessonStudentListen(this.courseId,this.user.user.Id)>num)
    return "1mm solid #3ee061"
    if(this.funStudent.CountLessonStudentListen(this.courseId,this.user.user.Id)==num)
    return "1mm solid #e0a73e66"
    return "1mm solid #e03e4166"
 
  }
  IfGoToLesson(numIdLesson:string){
    if(this.user.user.Id=="0000")
      return true;
    let num=0;
    num=parseInt(numIdLesson);
    if(this.funStudent.CountLessonStudentListen(this.courseId,this.user.user.Id)>=num)
    return true
    return false
  }
  GoToLesson(idLesson:string){
this.rout.navigate(['/idCourse/'+this.courseId+'/currentLesson/'+idLesson])
  }

  // aa() {
  //   console.log("id: " + this.courseId)

  // }


  returnToAllCourses(){
    if(this.user.user.Id=="0000")
      this.rout.navigate(['/HomePageManager/managerAllCourses'])
    else
    this.rout.navigate(['/HomePageStudent'])
  }
}
