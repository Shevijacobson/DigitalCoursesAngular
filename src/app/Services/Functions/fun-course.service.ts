import { Injectable } from '@angular/core';
import { StudentsService } from '../Students/students.service';
import { Course } from '../../Models/Course'
import { CoursesService } from '../Courses/courses.service';
import { Lesson } from '../../Models/Lesson';
import { UserService } from '../user/user.service';
import { Student } from '../../Models/Student';
import { LessonsService } from '../Lessons/lessons.service';


@Injectable({
  providedIn: 'root'
})

export class FunCourseService {
  constructor(public course: CoursesService, private userGlobal: UserService) { }

  //פונקציעה שמחזירה את כל הקורסים
  //ללא כפילויות
  getAllCourses() {
    let newArr: string | any[] = []

    let flag = false
    for (let i = 0; i < this.course.arrCourses.length; i++) {
      flag = false
      for (let g = 0; g < newArr.length && flag == false; g++) {
        if (this.course.arrCourses[i].Id == newArr[g].Id)
          flag = true;
      }
      if (flag == false)
        newArr.push(this.course.arrCourses[i])
    }
    return newArr
  }
  //פונקציה שמוסיפה קורס
  addCourse(newCourse: Course) {
    for (let course of this.course.arrCourses)
      if (course.Name == newCourse.Name)
        return 400;

    this.course.idCourseService += 1;
    newCourse.Id = this.course.idCourseService.toString();
    this.course.arrCourses.push(newCourse)

    // console.log(this.course.arrCourses)
    return 200;
  };
  //  ערכית קורס
  editCourse(courseToEdit: Course) {
    for (let i = 0; i < this.course.arrCourses.length; i++) {
      if (this.course.arrCourses[i].Id == courseToEdit.Id) {
        this.course.arrCourses[i].IdStudent = courseToEdit.IdStudent
        this.course.arrCourses[i].IdTeacher = courseToEdit.IdTeacher
        this.course.arrCourses[i].Name = courseToEdit.Name
        this.course.arrCourses[i].NumLessons = courseToEdit.NumLessons
        break;
      }

    }
  }

  //פונקציה שמקבלת id מורה ומחזירה את הקורסים שהיא מלמדת
  getCoursesOfTeacher(idTeacher: string) {
    let arrCourse = []
    let isExist = false;
    for (let i = 0; i < this.course.arrCourses.length; i++) {
      if (this.course.arrCourses[i].IdTeacher == idTeacher) {

        for (let j = 0; j < arrCourse.length; j++)
          if (this.course.arrCourses[i].Id == arrCourse[j].Id)
            isExist = true;

        if (!isExist) {
          arrCourse.push(this.course.arrCourses[i])
          isExist = false;
        }

      }
    }
    return arrCourse
  }

  //פונקציה שמחזירה את כל הקורסים ששיכים למשתמש הנוכחי
  getCoursesByUser() {
    let user = this.userGlobal.user;
    let arrCourse: Course[] = []

    switch (user.Access) {
      case 0:
        return this.getAllCourses();
      case 1:
        {
          for (let course of this.course.arrCourses) {
            let flag = false
            if (course.IdTeacher == user.Id) {
              for (let g = 0; g < arrCourse.length && flag == false; g++) {
                if (course.Id == arrCourse[g].Id)
                  flag = true;
              }
              if (flag == false)
                arrCourse.push(course)
            }
          }
          return arrCourse;
        }
      case 2:
        {
          for (let course of this.course.arrCourses)
            if (course.IdStudent == user.Id)
              arrCourse.push(course)
          return arrCourse
        }
      default:
        return arrCourse;
    }
  }

  //פונקציה שנותנת את שם הקורס 
  //רצות על מערך הקורסיפ

  getNameCourseOfId(idCourse: string) {
    for (let i = 0; i < this.course.arrCourses.length; i++) {
      if (this.course.arrCourses[i].Id == idCourse)
        return this.course.arrCourses[i].Name
    }
    return " "
  }

  //פונקציה שמחזירה מערך של ת.ז. של תלמידים שלומדים בקורס זה 
  getIdStudentsInCurrentCourse(idCourse: string) {
    let studentsId: string[]
    studentsId = [];
    let index = 0;
    for (let i = 0; i < this.course.arrCourses.length; i++) {
      if (this.course.arrCourses[i].Id == idCourse)
        studentsId[index++] = this.course.arrCourses[i].IdStudent;
      // console.log(studentsId);
    }
    return studentsId;
  }
  //לקבל מספר שיעורים לפי ID של קורס
  getCountLessons(idCourse: string) {
    let isFind = false;
    let countlessons = 0;
    for (let i = 0; i < this.course.arrCourses.length && !isFind; i++) {
      if (this.course.arrCourses[i].Id == idCourse) {
        countlessons = this.course.arrCourses[i].NumLessons;
        isFind = true;
      }
    }
    return countlessons;
  }
  //שינוי המשתמה מספר השיעורים הוספת שיעור למשתנה זה
  addNumLesson(newLesson: Lesson) {
    for (let item of this.course.arrCourses)
      if (item.Id == newLesson.IdCourse) {
        console.log(item.NumLessons, "before")
        item.NumLessons += 1;
        console.log(item.NumLessons, "after")
      }
  }
  //פונקציה שמחזירה כמה ישעורים לקורס הנוכחי
  GetCountLessonsForCourse(idCourse: string) {
    for (let i = 0; i < this.course.arrCourses.length; i++) {
      if (this.course.arrCourses[i].Id == idCourse)
        return this.course.arrCourses[i].NumLessons;
    }
    return 0;
  }

}

