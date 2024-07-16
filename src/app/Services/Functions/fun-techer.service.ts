import { Injectable } from '@angular/core';
import { TeacherService } from '../Teachers/teacher.service';
import { UserService } from '../user/user.service';
import { Teacher } from '../../Models/Teacher';
import { CoursesService } from '../Courses/courses.service';

@Injectable({
  providedIn: 'root'
})
export class FunTecherService {

  constructor(public teachers: TeacherService, public userGlobal: UserService, private course: CoursesService) { }

  getUser(userName: string, password: string) {
    for (let i = 0; i < this.teachers.teachers.length; i++) {
      if (this.teachers.teachers[i].Id == userName && this.teachers.teachers[i].Password == password) {
        this.userGlobal.user = this.teachers.teachers[i]
        return true
      }
    }
    return false;
  }

  //  פונקציה שמחזירה את כל המורות הקיימות עם הקורסים שהן מלמדות
  GetAllTeachersWithTheirCourses() {
    let teachersWithTheirCourses = [];

    for (let teacher of this.teachers.teachers) {
      let courses: string[] = [];


      if (teacher.Access == 1) {
        for (let course of this.course.arrCourses) {
          let isExist = false;
          if (course.IdTeacher == teacher.Id) {
            for (let i = 0; i < courses.length && !isExist; i++)
              if (courses[i] == course.Name)
                isExist = true;
            if (!isExist)
              courses.push(course.Name);

          }

        }
        teachersWithTheirCourses.push({ ...teacher, courses: courses });
      }
    }
    console.log(teachersWithTheirCourses);
    return teachersWithTheirCourses;

  }

  //פונקציה שמקבלת אי די מורה ומחזירה את השם שלה
  GetNameTeacher(id_Teacher: string) {
    let nameTeache = ""
    for (let i = 0; i < this.teachers.teachers.length; i++) {
      if (this.teachers.teachers[i].Id == id_Teacher) {
        nameTeache = this.teachers.teachers[i].FirstName + " " + this.teachers.teachers[i].LastName
        return nameTeache
      }
    }
    return null
  }
  //פונקציה שמוסיפה מורה
  AddTeacher(newTeacher: Teacher) {

    for (let teacher of this.teachers.teachers) {
      if (teacher.Id == newTeacher.Id)
        return 400;
    }

    this.teachers.teachers.push(newTeacher);
    console.log(this.course.arrCourses)
    return 200;
  }

  getAllTeachers() {
    let teachersArr: Teacher[] = []

    for (let teacher of this.teachers.teachers) {
      if (teacher.Access == 1)
        teachersArr.push(teacher)
    }
    return teachersArr;
  }

  editTeacher(teacherToEdit: Teacher) {

    let isFind = false
    for (let i = 0; i < this.teachers.teachers.length && !isFind; i++) {
      if (this.teachers.teachers[i].Id == teacherToEdit.Id) {
        this.teachers.teachers.splice(i, 1);
        isFind = true;
      }
    }
    if (isFind) {
      this.teachers.teachers.push(teacherToEdit)

      return 200;
    }
    return 400;
  }

}