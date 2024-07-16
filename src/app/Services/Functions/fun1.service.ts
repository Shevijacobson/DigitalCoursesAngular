import { Injectable } from '@angular/core';
import { TeacherService } from '../Teachers/teacher.service';
import { StudentsService } from '../Students/students.service';
import { CoursesService } from '../Courses/courses.service';
import { LessonsService } from '../Lessons/lessons.service';

@Injectable({
  providedIn: 'root'
})
export class Fun1Service {
  constructor(public teacher:TeacherService,public student:StudentsService, public course:CoursesService,public lesson:LessonsService) { }
  //פונקציה שמקבלת שם משתמש וסיסמה בודקת אם היוזר הוא מנהל או מורה או תלמיד 
  //מחזירה את האוביקט של המשתמש
  //אם אין משתמש כזה הפונקציה מחזירה false
  identification(id:string, password:string){
    if(id=="123456789" && password=="123456789")
    return this.teacher.manager
    for(let i=0; i<this.teacher.teachers.length; i++)
    {
      if(this.teacher.teachers[i].Id==id && this.teacher.teachers[i].Password==password)
      return this.teacher.teachers[i]
    }
    for(let i=0; i<this.student.students.length; i++){
      if(this.student.students[i].Id==id && this.student.students[i].Password==password)
      return this.student.students[i]
    }
    return false
  }







}
