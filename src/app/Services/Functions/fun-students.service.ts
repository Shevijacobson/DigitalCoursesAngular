import { Injectable, numberAttribute } from '@angular/core';
import { StudentsService } from '../Students/students.service';
import { CoursesService } from '../Courses/courses.service';
import { Course } from '../../Models/Course';
import { UserService } from '../user/user.service';
import { LessonsService } from '../Lessons/lessons.service';
import { Student } from '../../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class FunStudentsService {

  constructor(public courses: CoursesService, public studentsArr: StudentsService, public userGlobal: UserService, public arrLessons: LessonsService) { }
  //פונקציה שמקבלת וד של קורס ומחזירה מערך מסוג קורסים של כל התלמידים שבקורס
  getStudentsOfCoure(idCours: string) {
    let arrStudentsOfCourse = []
    for (let i = 0; i < this.courses.arrCourses.length; i++) {
      if (idCours == this.courses.arrCourses[i].Id)
        arrStudentsOfCourse.push(this.courses.arrCourses[i])
    }
    return arrStudentsOfCourse;
  }

  getUser(userName: string, password: string) {

    for (let i = 0; i < this.studentsArr.students.length; i++) {
      if (this.studentsArr.students[i].Id == userName && this.studentsArr.students[i].Password == password) {
        this.userGlobal.user = this.studentsArr.students[i]
        return true
      }
    }
    return false;
  }

  //פונקציה שמקבלת תלמיד וקורס ומחזירה כמה שיעורים הקשיב
  CountLessonStudentListen(idCourse: string, id_Student: string) {
    let countLesson = 0;
    for (let i = 0; i < this.arrLessons.arrLesson.length; i++) {
      if (this.arrLessons.arrLesson[i].IdStudent == id_Student && this.arrLessons.arrLesson[i].IdCourse == idCourse) {
        if (this.arrLessons.arrLesson[i].isExecution == true)
          countLesson = countLesson + 1;
      }
    }
    return countLesson;
  }

  //פונקציה שמקבלת תלמיד וקורס ומחזירה כה שיעורים יש לתלמיד בקורס הרצוי
  CountLessonInCourse(idCourse: string, id_Student: string) {
    let countLesson = 0;
    for (let i = 0; i < this.arrLessons.arrLesson.length; i++) {
      if (this.arrLessons.arrLesson[i].IdStudent == id_Student && this.arrLessons.arrLesson[i].IdCourse == idCourse) {
        {
          // console.log(this.arrLessons.arrLesson[i].exe)
          countLesson = countLesson + 1;
        }
      }
    }
    return countLesson;
  }



  //פונקציה שמקבלת מערך של ת.ז. ומחזירה מערך של תלמידים בהתאם לת.ז.
  GetStudentsById(studentId: string[]) {
    let arrStudents: Student[];
    arrStudents = [];
    let index = 0;
    for (let i = 0; i < studentId.length; i++)
      for (let j = 0; j < this.studentsArr.students.length; j++) {
        if (this.studentsArr.students[j].Id == studentId[i])
          arrStudents[index++] = this.studentsArr.students[j];
      }
    console.log(arrStudents);
    return arrStudents;
  }

  //פונקציה שמחזירה את כל התלמידים עם הקורסים המשויכים אליהם
  GetAllStudentsWithTheirCourses() {
    let studentArr = [];
    let courses = [];
    for (let student of this.studentsArr.students) {
      for (let course of this.courses.arrCourses) {
        if (student.Id == course.IdStudent)
          courses.push(course.Name);
      }
      studentArr.push({ ...student, courses: courses })
      courses = [];
    }

    console.log(studentArr)
    return studentArr;
  }


  addStudent(newStudent: Student) {
    for (let student of this.studentsArr.students) {
      if (student.Id == newStudent.Id)
        return 400;
    }
    this.studentsArr.students.push(newStudent);
    return 200;
  }

  editStudent(studentToEdit: any) {

    for (let student of this.studentsArr.students) {
      if (student.Id = studentToEdit.Id) {
        student.FirstName = studentToEdit.Id
        student.LastName = studentToEdit.LastName
        // student.Id = studentToEdit.Id
        student.Password = studentToEdit.Password
        return 200;
      }
    }


    return 400;
  }

  //פונקציה שמקבלת תלמיד וקורב ומוחקת את הקטרס וכל השיורים שמשויכים לתלמיד
  deleteCourseAndLessonsByIdStudent(studentToDelete: Student, idCourse: string) {
    let isFind = false;
    for (let i = 0; i < this.courses.arrCourses.length && !isFind; i++) {
      if (this.courses.arrCourses[i].Id == idCourse && this.courses.arrCourses[i].IdStudent == studentToDelete.Id) {
        console.log("course ", this.courses.arrCourses[i])
        this.courses.arrCourses.splice(i, 1)
        isFind = true;
      }

      for (let i = 0; i < this.arrLessons.arrLesson.length; i++) {
        if (this.arrLessons.arrLesson[i].IdStudent == studentToDelete.Id && this.arrLessons.arrLesson[i].IdCourse == idCourse) {
          console.log("lesson ", this.arrLessons.arrLesson[i])
          this.arrLessons.arrLesson.splice(i, 1)
        }
      }


    }

  }

}